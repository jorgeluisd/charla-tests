import { renderHook, waitFor } from '@testing-library/react';
import { useFetchData } from './useFetchData';

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mockData: 'mocked' }),
  })
) as jest.Mock;

test('should fetch data', async () => {
  const url = 'https://example.com/data';
  const { result } = renderHook(() => useFetchData(url));

  await waitFor(() => {
    expect(result.current).toEqual({ mockData: 'mocked' });
    expect(fetch).toHaveBeenCalledWith(url);
  });
});
