import React from 'react'
import './widjetLg.scss'

const WidjetLg = () => {
    const Button = ({type})=>{
        console.log(type)
      return  <button className={'button '+ type}>{type}</button>
     
    }
    return (
        <div className='widjetLg'>
            <h3 className='title'>Последние транзакции</h3>
            <table className='table'>
                <tbody>
                    <tr className='tr'>
                        <th>Покупатель</th>
                        <th>Дата</th>
                        <th>Сумма</th>
                        <th>Статус</th>
                    </tr>
                    <tr>
                        <td className='userInfo'>
                            <img src="/img/ava.jpg" alt="" />
                            <span>Иван Иванов</span>
                        </td>
                        <td> 2 января 2021</td>
                        <td>$222.00</td>
                        <td>
                            <Button type='Success'/>
                        </td>
                    </tr>
                    <tr>
                        <td className='userInfo'>
                            <img src="/img/ava.jpg" alt="" />
                            <span>Иван Иванов</span>
                        </td>
                        <td> 2 января 2021</td>
                        <td>$222.00</td>
                        <td>
                            <Button type='Pending'/>
                        </td>
                    </tr>
                    <tr>
                        <td className='userInfo'>
                            <img src="/img/ava.jpg" alt="" />
                            <span>Иван Иванов</span>
                        </td>
                        <td> 2 января 2021</td>
                        <td>$222.00</td>
                        <td>
                            <Button type='Declined'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WidjetLg
