export default function Form() {
    const [formData, setFormData] = useState({ name: "", message: "" });

    const handleChange = (e) => {
      e.preventDefault();
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
     return (
      <div className={styles.features}>
        <div className={styles.feed}>
          <h1>Was this documentation helpful?</h1>
          <button>give a feedback</button>
        </div>
          <form>
            <div className={styles.App}>
              <div className={styles.label}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} 
                  onChange={handleChange}/>
              </div>
              <div className={styles.label}>
                <label>Review</label>
                <textarea className={styles.textarea} type="text" name="message"
                  placeholder="type here" value={formData.message}
                  onChange={handleChange} />
                <button>send feedback</button>
              </div>
            </div>
          </form>
      </div>
  )}