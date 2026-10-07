# 🚀 CSAT Dashboard - Deployment Instructions

## ⚡ 5-Minute Deployment to Lovable.app

Follow these exact steps to deploy your CSAT dashboard live in under 5 minutes.

---

## Step 1️⃣: Create a Lovable Project (2 min)

1. Open **https://lovable.app** in your browser
2. Click **"Create"** button (top right)
3. Select **"Start from scratch"**
4. Enter Project Name: `CSAT-Pulse-EU`
5. Click **"Create Project"**
6. Wait for the editor to load (you'll see a blank canvas)

---

## Step 2️⃣: Copy the Dashboard Code (1 min)

1. In the Lovable editor, look for the **Code** tab or panel
2. Find the file named `App.jsx`, `index.jsx`, or similar main component
3. **Select ALL** the code in that file (Ctrl+A / Cmd+A)
4. **Delete** it
5. Go to this GitHub repo: `https://github.com/deepakcharan11/csat-pulse-dashboard`
6. Open `src/CSATDashboard.jsx`
7. Click the **Raw** button (or copy icon)
8. **Copy** the entire code
9. Paste it into your Lovable editor
10. Click **Save** (Cmd+S or Ctrl+S)

---

## Step 3️⃣: Deploy (1 min)

1. Look for the **Deploy** button in the top-right corner
2. Click **Deploy**
3. Select **"Lovable Hosted"** (free, public deployment)
4. Click **"Deploy Now"**
5. Wait 30-60 seconds for the deployment to complete
6. You'll see: ✅ **Deployment successful**

---

## Step 4️⃣: Get Your Live URL ✅

After deployment, you'll see your public URL in the format:

```
https://csat-pulse-eu-[random-hash].lovable.app/
```

**This is your live dashboard!** 🎉

### Share this link with your team:
```
📊 CSAT Dashboard: https://csat-pulse-eu-[your-url].lovable.app/

Features:
- Real-time CSAT metrics
- Team performance breakdown
- Agent leaderboard
- 6-week trend analysis
```

---

## 🔌 Connecting Real Data (Optional - Do Later)

The dashboard works immediately with **sample data**. When you're ready to connect real Snowflake data:

### Option A: Update API Endpoint
If you have a backend API:
1. Open your project code in Lovable
2. Find the `useEffect` hook around line 50-80
3. Uncomment the API fetch code
4. Replace `/api/csat/metrics` with your actual endpoint
5. Save & redeploy

### Option B: Deploy Backend API
Create a simple API using one of these:
- Node.js/Express
- Python/Flask
- AWS Lambda

See `sql/CSAT_Queries.sql` for the SQL to run in your API.

### Option C: Direct Snowflake in Lovable
1. In Lovable, go to **Integrations**
2. Add **Snowflake** connection
3. Enter your EU Snowflake credentials
4. Use direct SQL queries in the component

---

## ✨ What's Included

✅ Full React component with all UI
✅ 4 dashboard tabs (Overview, Trends, Teams, Agents)
✅ 5 metric cards with KPIs
✅ Interactive Recharts charts
✅ Data tables for detailed breakdown
✅ Mobile responsive design
✅ Dark theme matching TTR dashboard
✅ Sample data (ready to replace with real data)

---

## 🆘 Troubleshooting

### Deployment Failed?
- Check for syntax errors in the code (look for red squiggly lines)
- Try copying the code in smaller chunks
- Wait 5 minutes and try deploying again
- Check Lovable's status page

### Blank Screen After Deploy?
- Open browser developer tools (F12)
- Check the **Console** tab for error messages
- Look for import/library errors
- Refresh the page (Cmd+R / Ctrl+R)

### Can't Find Deploy Button?
- Look for a **rocket icon** or **publish** button
- Check the top-right corner of the screen
- In Lovable, it should be near the Preview/Share buttons

### Data Not Showing?
- The dashboard includes sample data - it should show by default
- If not, check browser console (F12) for JavaScript errors
- Make sure all libraries loaded (Recharts, Lucide, Tailwind)

---

## 📊 Next Steps After Deployment

1. ✅ **Share the link** with your team
2. ⏭️ **Test the dashboard** - Click through all tabs
3. ⏭️ **Connect real data** - When you're ready (see API options above)
4. ⏭️ **Monitor it** - Set up bookmarks or add to team dashboard

---

## 💡 Tips

- **Bookmark your dashboard URL** for easy access
- **Share the link** as a public reference for your team
- **Update when needed** - You can edit and redeploy anytime
- **Use sample data first** to verify everything works before integrating API

---

## 📞 Need Help?

1. **Lovable Help** - Check https://lovable.app/docs
2. **GitHub Issues** - Create an issue in this repo
3. **Check Troubleshooting** - Section above
4. **Review CSAT_Queries.sql** - For backend API setup

---

**Your dashboard will be live in minutes! 🚀**
