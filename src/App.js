import Top from './Top';
import Menu from './Menu';
import Content from './Content';

export default function App(){
    return(
        <div className="App">
            <Top />
            <div className="row">
                <Menu />
                <Content /> 
            </div>            
        </div>   
    )
}