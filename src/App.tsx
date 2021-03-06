import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Footer } from './components/footer'
import { Header } from './components/header'

import { QuizPage } from './pages/quiz'
import { TodoPage } from './pages/todos'

export const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/todo" />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
    <Footer />
  </Router>
)
