import React from 'react';
import Card from './Card';
import Detail from './Detail';
const Cardlist = ({addnews}) => {
    // ให้ Cardlist รับ Addnews เข้ามาเพื่อแสดงผล ค่าจาก API แสดงผลตามความต้องการ
    return (
        <div>
            <section className="mw7 center avenir">
                <h2 className="baskerville fw1 ph3 ph0-l">News</h2>
                { 
                    addnews.map((paper, i) =>{
                        // paper ก็คือข้อมูล 1 ชุดของ Array i คือ key
                        return  (<Card 
                          key={i} id ={paper.id} 
                          titles = {paper.title } 
                          details = {paper.detail}/>

                        // หลังจากนั้น วนค่าโดยไปเก็บไว้ เช่น  titles = { paper.title } เพื่อที่จะส่งต่อค่า props ไปให้ Card แสดงผล
                        )   
                    })
                }
            
                
            </section>
        
        
        </div>         
    );
} 
export default Cardlist; 