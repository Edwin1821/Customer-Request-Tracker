const supabase = require('../config/supabaseClient');

// CREATE
exports.createRequest = async (req, res) => {
  try {
    const { customer_name, email, title, description } = req.body;

    if (!customer_name || !email || !title) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const { data, error } = await supabase
      .from('requests') 
      .insert([{ customer_name, email, title, description }])
      .select();

    if (error) throw error;

    res.status(201).json({
      message: "Request created successfully",
      data
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE
exports.getSingleRequest = async( req,res )=> {
  try{
    const {id} = req.params;

    const {data, error} = await supabase.from('requests').select('*').eq('id', id).single();

    if(error) throw error;
    res.json(data);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

// GET ALL
exports.getRequests = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({
      count: data.length,
      data
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// UPDATE STATUS
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from('requests')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;

    res.json({
      message: "Status updated",
      data
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// DELETE
exports.deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('requests')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.json({ message: "Request deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};