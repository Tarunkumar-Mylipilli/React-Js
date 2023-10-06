let heading = React.createElement(
    'h1',{
        id: 'demo'
    },
    "this is React Js Demo"
)

let para = React.createElement(
    'h1',{
        id: 'demo'
    },
    "this is React Js Demo para"
)
let wrapper = React.createElement(
    'div',{

    },
    [heading,para]
)

let element = document.getElementById('root');



const root = ReactDom.createRoot('element');

root.render(wrapper);