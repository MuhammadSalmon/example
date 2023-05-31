const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name, null),
        React.createElement('p', {}, props.ocupation, null)
    ])
}

const App = () =>{
return React.createElement('div', {}, [
    React.createElement('h1', {className: 'title'}, 'React is render'),
    React.createElement(Person, {name: 'Muhammadsalmon', ocupation: 'janitor'}, 'React is render'),
    React.createElement(Person, {name: 'Sino', ocupation: 'Master'}, 'React is render'),
    React.createElement(Person, {name: 'Sayod', ocupation: 'doctor'}, 'React is render')
])
}


// ReactDOM.render(
//     React.createElement(App), document.getElementById('root')
//     )

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render( React.createElement(App))