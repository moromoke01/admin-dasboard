import './widget.scss'

const Widget = ({headline, count, percentage}) => {

 
  return (
    <div className='widget'>
      <div className='left'>
      {/* {Icon && <Icon className="widget-icon" />} */}
      </div>
      <div >
       
          <div className='right'>
           <p >{headline}</p>
           <h2>{count}</h2>
           <p>{percentage}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Widget
