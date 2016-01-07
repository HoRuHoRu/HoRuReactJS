var Child = React.createClass({displayName: "Child",
    render: function(){
        return (
            React.createElement("div", null, 
                "안녕하세요! ", React.createElement("strong", null, this.props.name), "님"
            )
        )
    }
})