import {act, renderHook, waitFor} from '@testing-library/react';
import {store} from "../../redux/store";
import React, {ReactElement} from "react";
import {Provider} from "react-redux";
import {useFetchDataRedux} from "./useFetchDataRedux";

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mockData: 'mocked' }),
  })
) as jest.Mock;

describe('useFetchDataRedux', () => {
  test('should data fetching', async () => {
    const url = 'https://api.example.com/data';
    const wrapper = ({ children }: {children: ReactElement}) => <Provider store={store}>{children}</Provider>;

    const { result } = renderHook(() => useFetchDataRedux(url), { wrapper });

    act(() => {
      result.current.loadData();
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).not.toBeNull();
      expect(result.current.error).toBeNull();
    });
  });

  test('should data fetching error', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Error al cargar los datos'))
    );

    const url = 'https://api.example.com/data';
    const wrapper = ({ children }: {children: ReactElement}) => <Provider store={store}>{children}</Provider>;

    const { result } = renderHook(() => useFetchDataRedux(url), { wrapper });

    act(() => {
      result.current.loadData();
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).not.toBeNull();
    });
  });
});
