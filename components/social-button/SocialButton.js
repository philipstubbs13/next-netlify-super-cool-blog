// @ts-nocheck
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialButton({ url, icon }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} className="text-primary mr-20" style={{ width: 20 }}  />
    </a>

  )
}