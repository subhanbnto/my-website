# Netlify + Backend Setup Guide

## The Problem

Netlify only hosts **static websites** (HTML, CSS, JavaScript). Your contact form needs a **backend server** to send emails, which Netlify cannot host.

## Solution: Deploy Backend Separately

You need to deploy your backend server to a platform that supports Node.js, then connect it to your Netlify frontend.

---

## Quick Setup (Railway - Recommended)

Railway is the easiest option and has a free tier.

### Step 1: Deploy Backend to Railway

1. **Go to Railway**: https://railway.app
2. **Sign up** with your GitHub account
3. **New Project** → **Deploy from GitHub repo**
4. **Select your repository**: `my-website`
5. **Add Service** → **Empty Service**

6. **Configure the service:**
   - Click on the service
   - Go to **Settings**
   - **Root Directory**: `server`
   - **Start Command**: `npm start`

7. **Add Environment Variables:**
   - Go to **Variables** tab
   - Add these (from your `server/.env` file):
     ```
     PORT=3001
     EMAIL_HOST=smtp.zohocloud.ca
     EMAIL_PORT=465
     EMAIL_SECURE=true
     EMAIL_USER=info@subhan.ca
     EMAIL_PASS=your-zoho-app-password-here
     CONTACT_EMAIL=info@subhan.ca
     SEND_CONFIRMATION=true
     ```

8. **Get your backend URL:**
   - Go to **Settings** → **Networking**
   - Copy the **Public Domain** (e.g., `https://your-app.railway.app`)

### Step 2: Connect Netlify to Backend

1. **Go to Netlify Dashboard**
   - Select your site
   - **Site settings** → **Environment variables**

2. **Add Environment Variable:**
   - **Key**: `VITE_API_URL`
   - **Value**: Your Railway backend URL (e.g., `https://your-app.railway.app`)
   - **Important**: No trailing slash!
   - Click **Save**

3. **Redeploy your site:**
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Clear cache and deploy site**

### Step 3: Test

1. Visit your Netlify site
2. Go to the Contact section
3. Fill out and submit the form
4. You should receive an email!

---

## Alternative: Render (Free Tier)

If Railway doesn't work, try Render:

1. **Go to Render**: https://render.com
2. **Sign up** with GitHub
3. **New +** → **Web Service**
4. **Connect repository**: Select `my-website`
5. **Configure:**
   - **Name**: `portfolio-backend`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. **Add Environment Variables** (same as Railway)
7. **Create Web Service**
8. **Copy the URL** (e.g., `https://your-app.onrender.com`)
9. **Add to Netlify** as `VITE_API_URL`

---

## Troubleshooting

### Contact form shows "Network error"

**Problem**: Frontend can't reach backend

**Solution**:
1. Check backend is running (visit `https://your-backend-url/api/health`)
2. Verify `VITE_API_URL` in Netlify environment variables
3. Make sure URL has no trailing slash
4. Check browser console (F12) for CORS errors

### Backend not starting

**Problem**: Server crashes on Railway/Render

**Solution**:
1. Check logs in Railway/Render dashboard
2. Verify all environment variables are set
3. Make sure `EMAIL_PASS` is your App Password (not regular password)

### Email not sending

**Problem**: Form submits but no email received

**Solution**:
1. Check backend logs for email errors
2. Verify Zoho App Password is correct
3. Test email config locally: `cd server && npm run test-email`

### CORS errors

**Problem**: Browser shows CORS error

**Solution**: 
- The backend already has CORS enabled
- Make sure backend URL in Netlify is correct
- Check backend is actually running

---

## Quick Checklist

- [ ] Backend deployed to Railway/Render
- [ ] Backend URL copied (e.g., `https://your-app.railway.app`)
- [ ] `VITE_API_URL` added to Netlify environment variables
- [ ] Netlify site redeployed
- [ ] Backend health check works: `https://your-backend-url/api/health`
- [ ] Contact form tested and working

---

## Your Backend URL

After deploying, your backend URL will look like:
- Railway: `https://your-app-name.railway.app`
- Render: `https://your-app-name.onrender.com`

**Add this to Netlify as `VITE_API_URL`**

---

## Need Help?

1. Check backend logs in Railway/Render dashboard
2. Test backend health: `https://your-backend-url/api/health`
3. Check browser console (F12) for errors
4. Verify all environment variables are set correctly

Your contact form should work once the backend is deployed and connected! 🚀

