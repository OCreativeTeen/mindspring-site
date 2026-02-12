# MindStoryRoom 心理咨询官网骨架

基于 `Next.js + Vercel`，可直接上线。  
域名：`mindstoryroom.com`（在 BlueHost 管理）。

## 本地运行

```bash
npm install
npm run dev
```

访问：`http://localhost:3000`

## 页面结构

- 首页（主张 + 人群 + CTA）
- 信任组件（咨询方式/工作取向/保密原则）
- 服务
- 关于我
- 预约与费用
- 隐私与保密
- FAQ

## 功能開關

- **`src/site-config.ts`**：`showYouTubeSection` 預設為 `false`（不顯示 YouTube 區塊）。改為 `true` 後重新 build 即可顯示。

## Logo 与联系

- **Logo**：将 `logo_r.png`（圆形）与 `logo.png`（方形）放入 `public/` 文件夹
- **联系方式**：已配置为 support@mindstoryroom.com、289-879-8627（e-Transfer 至同邮箱）
- 服务内容：`src/app/page.tsx` 的 `services` 数组和服务卡片内容
- 费用/政策：预约与费用区域文本

## 部署到 Vercel（绑定 BlueHost 域名）

1. 把项目推送到 GitHub
2. 在 Vercel 导入项目并部署
3. Vercel 项目中添加域名：`mindstoryroom.com`
4. 到 BlueHost DNS 配置：
   - `A @ -> 76.76.21.21`（或按 Vercel 提示）
   - `CNAME www -> cname.vercel-dns.com`
5. 等待 DNS 生效后访问：
   - `https://mindstoryroom.com`
