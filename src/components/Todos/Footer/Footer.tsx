interface IFooterProps {
  visibleStatus?: number
  totalCount: number
  completedCount: number
  onChangeVisibleStatus: (status?: number) => void
  onClear: () => void
}

function Footer({visibleStatus, totalCount, completedCount, onChangeVisibleStatus, onClear}: IFooterProps) {
  // console.log('Footer');
  
  return (
    <div className='todos__footer footer' data-testid="footer">
      <span className='footer__info'>
        {
          !visibleStatus && visibleStatus !== 0 && completedCount > 0 ? 
          `${totalCount - completedCount} items left` :
          visibleStatus === 1 ?
          `${completedCount} items` :
          `${totalCount - completedCount} items`
        }
      </span>

      <div className="footer__status-btns">
        <button 
          className={`footer__btn ${!visibleStatus && visibleStatus !== 0 ? 'active': ''}`} 
          onClick={() => onChangeVisibleStatus()}
          data-testid='all-btn'
        >All</button>
        <button 
          className={`footer__btn ${visibleStatus === 0 ? 'active': ''}`} 
          onClick={() => onChangeVisibleStatus(0)}
          data-testid='active-btn'
        >Active</button>
        <button 
          className={`footer__btn ${visibleStatus === 1 ? 'active': ''}`} 
          onClick={() => onChangeVisibleStatus(1)}
          data-testid='completed-btn'
        >Completed</button>
      </div>

      {
        (visibleStatus === 1 || (!visibleStatus && visibleStatus !== 0)) && completedCount > 0 ?
        <button 
          className="footer__btn" 
          disabled={completedCount > 0 ? false : true}
          onClick={onClear}
          data-testid='clear-btn'
        >Clear Completed</button> :
        null
      }
    </div>
  )
}

export default Footer;