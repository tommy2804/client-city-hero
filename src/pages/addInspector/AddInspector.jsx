import axios from 'axios';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/context';
import AddInspectorForm from './addForm';
import './AddInspector.css'
const AddInspector = () => {
    const [showAlrt , setShowAlrt] = useState(null)

  return (

        <div className='addInspectorPage'>

                {!showAlrt &&(      
                    <AddInspectorForm setShowAlrt={setShowAlrt}/>
                )}
                {showAlrt &&(
                <div className='alrtText'> 
                    <article style={{fontSize:'26px'}}>
                        Inspector was add successfully
                    </article>
                    <article style={{fontSize:'16px'}}>
                        You will be able to see it on the map as soon as they first connects or see it right now in the <a href='/Main/AllInspectors'>Inspector Handler</a>                    </article>
                    <article >
                        <button className='addAnthorBTN' onClick={()=>setShowAlrt(null)}>Add Another Inspector</button>
                    </article>
                </div>
                )}
        </div>

  );
};

export default AddInspector;
