import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-con">
      <div className="card">
        <h1>FAQs</h1>
        <ul className="list-items">
          {faqsList.map(eachObject => (
            <FaqItem key={eachObject.id} faqsListItem={eachObject} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
