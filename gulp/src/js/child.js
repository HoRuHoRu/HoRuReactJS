var Child = React.createClass({
    render: function(){
        return (
            <div>
                안녕하세요! <strong>{this.props.name}</strong>님
            </div>
        )
    }
})