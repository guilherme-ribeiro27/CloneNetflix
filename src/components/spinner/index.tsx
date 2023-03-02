import { Spinner } from "reactstrap";
import styles from './styles.module.scss'

const PageSpinner = () => {
  return (
    <div className={styles.div}>
        <Spinner color="light" animation="border"/>
    </div>
  )
}

export default PageSpinner