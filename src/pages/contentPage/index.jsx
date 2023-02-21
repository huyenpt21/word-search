import { List, Table } from "antd";
import wordApi from "api/wordApi";
import SearchBar from "components/searchBar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearchData } from "searchSlice";

export default function ContentComponent({ type }) {
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();
  const [wordData, setWordData] = useState([]);
  useEffect(() => {
    const getHomophones = async () => {
      try {
        const response = await wordApi.getWords({
          [type]: searchData,
          md: "d",
        });
        setWordData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getHomophones();
  }, [searchData, type]);

  return (
    <>
      <SearchBar />
      <h2>Các từ tìm được:</h2>
      <List
        pagination={wordData.length > 0 ? "bottomLeft" : "none"}
        dataSource={wordData}
        renderItem={(item, index) => (
          <List.Item key={item.word} className="list-item">
            <div>
              <b>{index + 1}.</b>
              <span
                className="title cursor-pointer"
                onClick={() => {
                  dispatch(setSearchData(item?.word));
                }}
              >
                {" "}
                {item?.word}
              </span>
            </div>
            <ul className="list-def">
              {item?.defs?.map((def, index) => (
                <li key={index} className="item-def">
                  {def}
                </li>
              ))}
            </ul>
          </List.Item>
        )}
      />
    </>
  );
}
