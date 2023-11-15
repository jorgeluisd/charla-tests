import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from "../../redux/fetchData/thunks";
import {RootState} from "../../redux/store";

export const useFetchDataRedux = (url: string) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.fetchData.items);
  const loading = useSelector((state: RootState) => state.fetchData.loading);
  const error = useSelector((state: RootState) => state.fetchData.error);

  const loadData = () => {
    dispatch(fetchData(url) as any);
  };

  return { data, loading, error, loadData };
};
