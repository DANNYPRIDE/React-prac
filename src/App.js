import logo from './logo.svg';
import './App.css';

function HeaderTag(){
  return <header><h1><a href="/">html</a></h1></header>
}
function Nav(props){
  console.log("Props",props.data);
  const list= props.data.map(function(e){
    return <li key={e.id}><a href={'/read/'+e.id}>{e.title}</a></li>
  })
  //li 의 key property 는 react convenction
  // [ <li><a href="/read1">html</a></li>
  // ,<li><a href="/read2">css</a></li>];

  return  <nav><ol>
     {list}
  </ol>
</nav>
}
function Article(props){
  return   <article>
  <h2>{props.title}</h2>
  {props.body}
  </article>
}
function App() {
  const topics=[ 
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]
  return (
    <div>
       <HeaderTag></HeaderTag>
       <Nav data={topics} ></Nav>
      <Article title="HTML" body="HTML is ..."></Article>
      <Article title="CSS" body="CSS is ..."></Article>
       
    </div>
  );
}


export default App;
