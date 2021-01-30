import {Pagination, WhiteSpace, WingBlank} from '@ant-design/react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {allBooks} from '../../store/bookStoreStore/thunkBookStore';
import {StateReduxType} from '../../store/reducers';

const PaginationComponent: React.FC<{}> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = useSelector(
    (state: StateReduxType) => state.bookStoreState.pageSize,
  );
  const countData = useSelector(
    (state: StateReduxType) => state.bookStoreState.countData,
  );

  const dispatch = useDispatch();

  const totalPage = Math.ceil(countData / pageSize);
  const locale = {
    prevText: 'prev',
    nextText: 'next',
  };
  const onChangePage = (current: number) => {
    setCurrentPage(current);
    dispatch(allBooks({page: current, pageSize}));
  };

  return (
    <WingBlank style={styles.pagination} size="sm">
      <WhiteSpace size="sm" />
      <Pagination
        onChange={(current: number) => onChangePage(current)}
        total={totalPage}
        current={currentPage}
        locale={locale}
      />
    </WingBlank>
  );
};

export default PaginationComponent;

const styles = StyleSheet.create({
  pagination: {marginBottom: 20, marginLeft: 20, marginRight: 20},
});
