import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword || !name || !surname || !phone) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Пароли не совпадают.');
      return;
    }
    setError('');

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, surname, phone, role })
      });

      const data = await res.json();
      if (res.ok) {
        alert('Регистрация успешна!');
      } else {
        setError(data.error || 'Ошибка регистрации');
      }
    } catch (err) {
      setError('Сервер недоступен');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Регистрация</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: 24,
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {error && (
          <div
            style={{
              color: '#d32f2f',
              background: '#ffebee',
              padding: '8px 12px',
              borderRadius: 4,
              marginBottom: 8,
              fontSize: 14,
            }}
          >
            {error}
          </div>
        )}
        <Input size="medium" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
        <Input size="medium" placeholder="Фамилия" value={surname} onChange={e => setSurname(e.target.value)} />
        <Input size="medium" placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} />
        <Input size="medium" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input size="medium" type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
        <Input size="medium" type="password" placeholder="Подтвердите пароль" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label style={{ fontWeight: 500, marginBottom: 2 }}>Роль:</label>
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            style={{ width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4, fontSize: 16 }}
          >
            <option value="user">Пользователь</option>
            <option value="admin">Админ</option>
          </select>
        </div>
        <Button size="medium" color="primary" title="Зарегистрироваться" onClick={() => {}} />
      </form>
    </div>
  );
};

export default Register;
