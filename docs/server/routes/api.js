// server/routes/api.js
const express = require('express');
const router = express.Router();

// 샘플 데이터 반환 경로: GET /api/data
router.get('/data', (req, res) => {
  res.json({
    message: 'This is a sample data response',
    data: [
      { id: 1, name: 'Data 1', value: 100 },
      { id: 2, name: 'Data 2', value: 200 },
      { id: 3, name: 'Data 3', value: 300 },
    ],
  });
});

module.exports = router;