const schema = {
    model:
    {
        add:function (x,y) 
        {
            var out = x+y;
            return : function(res)
            {
                return
                {
                    catch:function(err)
                    {
                        if(out == 100)
                        {
                            res(out);
                        
                        }
                        else {
                            console.log("plz enter properly");
                            
                        }
                    }
                }
            }    
        }
    }
}