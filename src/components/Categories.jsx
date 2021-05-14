import React from 'react'

class Categories extends React.Component {
  state = {
    activeItem: 3, 
  };
   onSelectItem = index => {
    /*this.setState({
      activeItem: index,
    });  */
    this.state.activeItem = index;
    this.forceUpdate();
    console.log(this.state)
  };
  render(){
    const{ items, onClickItem } = this.props;
    return ( 
      <div className="categories">
        <ul>
          <li className="active">Все</li>
          {items.map((name, index1) => (
            <li
              className={this.state.activeItem === index1 ? 'active' : ''}
              onClick={() => this.onSelectItem(index1 )} 
              key={`${name}_${index1}`}
            >{name}</li>
          ))}
        </ul>
    </div>
    )    
  }
}
export default Categories


/* export default function Categories({ items, onClickItem }) {
  return (
    <div className="categories">
        <ul>
          <li className="active">Все</li>
          {items.map((name, index) => (
            <li
              onClick={() => onClickItem(name )} 
              key={`${name}_${index}`}
            >{name}</li>
          ))}
        </ul>
    </div>
  )
} */
