import React from 'react';
import ReactDOM from 'react-dom';
import { Regular, Arrow,Functionconnectclass } from "./functions"; // Make sure the component names match the export names
import { Functionprops } from './functionprops';
import {ClassProps} from "./classprops";
import { ClassState } from './classstate';
import { UserInfo } from '../userinfo';
var fun1 =()=>
{
 alert("hello world");
}
function Hellof()
{
  return (
    <div>hello worlf from index.js class component
      <input type='submit' onClick={fun1}/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Hellof/>
    <Regular />
    <Arrow />
    <Functionconnectclass/>
    <Functionprops rollno={10} name="sai" num="98414 27214" passorfail={true}/>
    <ClassProps rollno={123} name="John Doe" num="123-456-7890" passorfail={true} />
    <ClassState/>
  </>
);
