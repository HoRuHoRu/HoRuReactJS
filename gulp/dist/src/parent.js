var Parent = React.createClass({displayName: "Parent",
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("div", null, " 부모 컴포넌트 입니다. "), 
                React.createElement(Child, {name: "child"})
            )
        )
    }
})