var Parent = React.createClass({
    render: function(){
        return (
            <div>
                <div> 부모 컴포넌트 입니다. </div>
                <Child name="child"/>
            </div>
        )
    }
})