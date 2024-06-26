import './widget.scss'

const Widget = ({Icon, headline, count, percentage}) => {

 
  return (
    <div className='widget'>
      <div className='left'>
      <span className="MyWidget-icon">{Icon && <Icon className="widget-icon" />}</span>
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
