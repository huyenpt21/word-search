import { Table } from 'antd';
import wordApi from 'api/wordApi';
import SearchBar from 'components/searchBar';
import { column } from 'constant/common';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSearchData } from 'searchSlice';

export default function ContentComponent({type}) {
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();
  const [wordData, setWordData] = useState([]);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const getHomophones = async () => {
      try {
        const response = await wordApi.getWords({[type]: searchData});
        setWordData(response);
      } catch (error) {
        console.log(error);
      }
    }
    getHomophones();
  }, [searchData, type]);

  useEffect(() => {
    const columnsParse = column.map((el) => {
      return {
        ...el,
        render : (data) => {
          if (el.dataIndex === 'word') {
            return (
              <b 
                onClick={() => {
                  dispatch(setSearchData(data))
                }}
                className="cursor-pointer"
              >{data}</b>
            )
          }
          return data;
        }
      }
    })
    setColumns(columnsParse);
  },[dispatch])
  return (
    <>
      <SearchBar />
      <Table 
        columns={columns}
        dataSource={wordData}
        pagination={wordData.length > 0 ? 'bottomLeft' : 'none'}
        rowKey={(record) => record?.word}
       />
    </>
  )
}
