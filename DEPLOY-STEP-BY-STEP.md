# 上线步骤：GitHub → Vercel → BlueHost 域名

按顺序做完下面每一步，即可用 **mindspringwellness.ca** 访问你的网站。

---

## 第一步：把代码推到 GitHub

### 1.1 在 GitHub 建仓库

1. 打开浏览器，访问：**https://github.com**，登录你的账号。
2. 右上角点击 **+** → 选 **New repository**。
3. 填写：
   - **Repository name**：例如填 `mindspring-site`（或任意英文名）。
   - **Public** 勾选。
   - **不要**勾选 “Add a README file”。
4. 点击 **Create repository**。
5. 记下仓库地址，形如：`https://github.com/你的用户名/mindspring-site.git`。

### 1.2 在本地项目里执行 Git 命令

在 Cursor 里打开终端（或本机 PowerShell / 命令提示符），进入项目目录后执行：

```bash
cd d:\MindStoryRoom\mindspring-site
git init
git add .
git commit -m "Initial: 心理咨询官网骨架"
git branch -M main
git remote add origin https://github.com/你的用户名/mindspring-site.git
git push -u origin main
```

- 把 **你的用户名** 换成你在 GitHub 的账号名。
- 若提示登录，用 GitHub 账号或 Personal Access Token 完成认证。
- 推送成功后，在 GitHub 网页上应能看到所有文件。

---

## 第二步：Vercel 导入并部署

### 2.1 用 GitHub 登录 Vercel

1. 打开：**https://vercel.com**
2. 点击 **Sign Up** 或 **Log In**，选择 **Continue with GitHub**。
3. 按提示授权 Vercel 访问你的 GitHub（可只授权单个仓库）。

### 2.2 导入项目

1. 登录后点击 **Add New…** → **Project**。
2. 在 **Import Git Repository** 里找到 **mindspring-site**（或你起的仓库名），点 **Import**。
3. **Configure Project** 页面：
   - **Framework Preset**：保持 **Next.js**。
   - **Root Directory**：留空。
   - 其余默认即可。
4. 点击 **Deploy**。
5. 等待 1～2 分钟，出现 **Congratulations** 即部署完成。

### 2.3 确认预览地址

- 页面会给出一个链接，例如：`https://mindspring-site-xxx.vercel.app`。
- 点开确认网站能正常打开，内容无误。

---

## 第三步：在 Vercel 里添加域名 mindspringwellness.ca

### 3.1 打开域名设置

1. 在 Vercel 里进入刚部署的 **项目**（点项目名进入）。
2. 顶部导航点 **Settings**。
3. 左侧菜单点 **Domains**。

### 3.2 添加域名

1. 在 **Domain** 输入框里输入：**mindspringwellness.ca**，点 **Add**。
2. 再添加一条：**www.mindspringwellness.ca**（可选，建议加）。
3. 添加后 Vercel 会显示 “Invalid Configuration” 或 “未配置”，并给出需要填的 DNS 记录，这是正常的，下一步去 BlueHost 配置即可。

### 3.3 记下 Vercel 要求的 DNS（备用）

- 根域名 **mindspringwellness.ca**：通常是 **A 记录** 指向 **76.76.21.21**，或 CNAME 指向 **cname.vercel-dns.com**（以 Vercel 页面显示为准）。
- **www**：**CNAME** 指向 **cname.vercel-dns.com**。

---

## 第四步：BlueHost DNS 指向 Vercel

### 4.1 登录 BlueHost 并找到 DNS

1. 打开：**https://www.bluehost.com**，登录账号。
2. 进入 **My Sites** 或 **Domains**，找到 **mindspringwellness.ca**。
3. 点击该域名旁的 **Manage** 或 **DNS** / **Zone Editor**（名称可能是「DNS 设置」「Manage DNS」「Zone File」）。
4. 若在 cPanel：**Domains** → **Zone Editor**，选中 **mindspringwellness.ca**。

### 4.2 配置根域名（mindspringwellness.ca）

- 找到 **Type** 为 **A**、**Name** 为 **@** 或 **mindspringwellness.ca** 的那一条。
- 点击 **Edit**（编辑）：
  - **Points to** / **Value** / **Answer** 改为：**76.76.21.21**
- 保存。
- 若没有 A 记录，则 **Add Record**：
  - **Type**：A  
  - **Name**：@（或留空，视界面而定）  
  - **Value**：76.76.21.21  
  - **TTL**：默认即可。

### 4.3 配置 www（www.mindspringwellness.ca）

- 找到 **Name** 为 **www** 的记录：
  - 若已存在且是 CNAME：编辑 **Value** 为 **cname.vercel-dns.com**。
  - 若不存在：**Add Record**：
    - **Type**：CNAME  
    - **Name**：www  
    - **Value** / **Points to**：**cname.vercel-dns.com**  
- 保存。

### 4.4 保存并等待生效

- 在 BlueHost 确认所有修改已保存。
- DNS 生效一般需要 **5 分钟～48 小时**，多数在 30 分钟内。

---

## 第五步：在 Vercel 确认域名生效

1. 回到 Vercel → 项目 → **Settings** → **Domains**。
2. 刷新页面，等待 **mindspringwellness.ca** 和 **www.mindspringwellness.ca** 状态变为 **Valid**（或显示证书已签发）。
3. Vercel 会自动为域名配置 **HTTPS**，无需在 BlueHost 再设置 SSL。

---

## 第六步：用域名访问

- 浏览器打开：**https://mindspringwellness.ca**
- 再试：**https://www.mindspringwellness.ca**
- 两者都应打开你的心理咨询官网，且地址栏有锁头（HTTPS）。

---

## 小结（可打印对照）

| 步骤 | 在哪里 | 做什么 |
|------|--------|--------|
| 1 | GitHub | 新建仓库 → 本地 `git init`、`add`、`commit`、`remote`、`push` |
| 2 | Vercel | 用 GitHub 登录 → Add New → Project → 选仓库 → Deploy |
| 3 | Vercel | Settings → Domains → 添加 mindspringwellness.ca 和 www.mindspringwellness.ca |
| 4 | BlueHost | DNS：A @ → 76.76.21.21；CNAME www → cname.vercel-dns.com |
| 5 | Vercel | Domains 里等状态变 Valid |
| 6 | 浏览器 | 访问 https://mindspringwellness.ca 和 https://www.mindspringwellness.ca |

---

## 常见问题

**Q：BlueHost 里找不到 DNS / Zone Editor？**  
A：可能在 cPanel 的 **Domains** 或 **Advanced** → **DNS Zone**。不同套餐入口略有不同。

**Q：改完 DNS 很久还是打不开？**  
A：用 https://www.whatsmydns.net 查 **mindspringwellness.ca** 的 A 记录是否已是 **76.76.21.21**。若已生效但 Vercel 仍显示 Invalid，可等几分钟再刷新 Vercel 的 Domains 页。

**Q：之后更新网站怎么弄？**  
A：在本地改代码后执行：`git add .` → `git commit -m "更新说明"` → `git push`。Vercel 会自动重新部署，mindspringwellness.ca 会显示最新版本。

完成以上步骤后，你的网站就通过 BlueHost 的域名 **mindspringwellness.ca** 正式上线了。
