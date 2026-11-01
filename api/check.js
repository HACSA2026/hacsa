const {createClient}=require('@supabase/supabase-js');
module.exports=async(req,res)=>{
 const u=process.env.SUPABASE_URL||'',k=process.env.SUPABASE_SERVICE_ROLE_KEY||'';
 let r='skipped';
 try{const s=createClient(u,k,{auth:{persistSession:false}});const {data,error}=await s.rpc('code_balance',{p_code:'x'});r=error?error.message:'ok '+data}catch(e){r='crash '+e.message}
 res.json({url_start:u.slice(0,12),url_end:u.slice(-12),key_starts:k.slice(0,10),key_length:k.length,db:r});
};
