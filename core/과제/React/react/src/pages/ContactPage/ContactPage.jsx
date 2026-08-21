import { useState } from 'react';
import styles from './ContactPage.module.css';

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제로는 API 전송. 여기서는 상태로만 처리
    console.log('문의 내용:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>문의</h1>
      <p className={styles.desc}>
        추천하고 싶은 콘텐츠나 궁금한 점이 있으시면 편하게 남겨 주세요.
      </p>

      {submitted ? (
        <div className={styles.success}>
          <p>메시지가 전송되었습니다. 감사합니다!</p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setSubmitted(false)}
          >
            다시 작성하기
          </button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="홍길동"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="hello@example.com"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">메시지</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="문의 내용을 입력해 주세요."
            />
          </div>

          <button type="submit" className="btn btn-primary">
            보내기
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactPage;
