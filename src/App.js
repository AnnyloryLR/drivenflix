import Top from './Top';
import Menu from './Menu';
import Content from './Content';

export default function App(){
    return(
        <div>
            <Top />
            <div class="row">
                <Menu />
                <Content /> 
            </div>            
        </div>   
    )
}