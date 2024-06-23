import "./list.scss";
import { listData } from "../../lib/dummyData.js";
import Card from "../card/Card.jsx";

const List = ({ posts }) => {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
