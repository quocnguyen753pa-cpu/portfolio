module.exports = {
  apps: [
    {
      name: "portfolio-app",

      // Lệnh chạy
      script: "npm",

      // Arguments cho script
      args: "start",

      // Chạy cluster để tận dụng nhiều CPU
      exec_mode: "cluster",

      // Số instance
      // 1 = 1 process
      // "max" = dùng toàn bộ CPU
      instances: 1,

      // Environment variables
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },

      // Auto restart nếu crash
      autorestart: true,

      // Restart nếu dùng quá nhiều RAM
      max_memory_restart: "1G",

      // Delay trước khi restart
      restart_delay: 5000
    },
  ],
};
