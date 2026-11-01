const {createClient}=require('@supabase/supabase-js');
module.exports=async(req,res)=>{
 const s=createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY,{auth:{persistSession:false}});
 const code=String(req.query.code||'x');
 const a=await s.rpc('code_balance',{p_code:code});
 res.json({received:code,length:code.length,balance:a.data,error:a.error&&a.error.message});
};
