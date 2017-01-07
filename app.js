



class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover : false
    };
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };


    return (
      <li style={style} onMouseEnter={this.updateHover.bind(this)} onMouseLeave={this.updateHover.bind(this)}>{this.props.item}</li>
    )
  }

  updateHover() {
    this.setState({
      hover: !this.state.hover
    });
    console.log(this.state.hover)
  }

}
  

var GroceryList = (props) => {
  console.log(props);
  return (<div>
    <h2> Grocery List </h2>
    {props.items.map((item) => (<GroceryListItem item={item}/>))}
  </div>)
};

var groceryItems = ['milk', 'cookies'];

//click events
var onListItemClick = (event) => {
  console.log('I got clicked');
};


ReactDOM.render(<GroceryList items={groceryItems} />, document.getElementById("app"));