import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }
    setError('');

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert('Вход успешен!');
      } else {
        setError(data.error || 'Ошибка входа');
      }
    } catch (err) {
      setError('Сервер недоступен');
    }
  };

  return (
    <div style={{ width: 400, margin: '0 auto' }}>
      <h2>Вход</h2>
      <form
        onSubmit={handleSubmit}
        style={{
            background: '#fff',
            padding: 32,
            borderRadius: 12,
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
        }}
      >
        <Input size="medium" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input size="medium" type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
        {error && (
          <div style={{ color: '#d32f2f', marginBottom: 8, fontSize: 14 }}>{error}</div>
        )}
        <Button size="medium" color="primary" title="Войти" onClick={() => {}} />
      </form>
    </div>
  );
};

export default Login;
