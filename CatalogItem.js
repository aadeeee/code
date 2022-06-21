import React from "react";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";

class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.item[0],
      author: this.props.item[1],
      publisher: this.props.item[2],
      year: this.props.item[3],
      bookmark: Math.random() > 0.8,
      like: false,
      like_count: Math.floor(Math.random() * 10) + 1,
    };
    this.check_bookmaark = this.check_bookmaark.bind(this);
    this.check_like = this.check_like.bind(this);
  }
  check_bookmaark() {
    this.setState((state) => {
      return { bookmark: !state.bookmark };
    });
  }
  check_like() {
    return this.setState((state) =>{
        if (state.like) 
        return{
            like_count : state.like_count-1, 
            like :!state.like
        }
        else return {
            like_count: state.like_count+1,
            like : !state.like
        }
    });
  }
  render() {
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title title">{this.state.title}</h5>
          <p className="card-text author">{this.state.author}</p>
          <p className="card-text text-muted publisher">
            {this.state.publisher}{" "}
            <small className="year">{this.state.year}</small>
          </p>
        </div>
        <div className="card-footer text-muted d-flex">
          <p className="flex-grow-1 text-start">{this.state.like ? <AiTwotoneLike onClick={this.check_like}/> : <BiLike onClick={this.check_like} />} {this.state.like_count} Like(s)
          </p>
          <p className="text-end" onClick={this.check_bookmaark}>
            {this.state.bookmark ? <FaBookmark /> : <FiBookmark />}
          </p>
        </div>
      </div>
    );
  }
}

export default CatalogItem;