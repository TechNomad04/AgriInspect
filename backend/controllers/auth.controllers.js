const registerUserAcc = async (req, res) => {
    try {
        const {email, password, phone, name, idtype, idproofnum} = req.body;
        if(!email || !password || !phone || ! name || !idtype || !idproofnum)
            return res.status(400).json({status: false, message: "Missing details"})
        return res.status(200).json({status: true}) 
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({status: false, message: "Internal server error"})
    }
}

const registeraccdetails = async(req, res) => {
    try{
        const {comname, bustype, cin, gstin, iec, apeda, fssai, pan, comemail, comphone, address, state, district, pincode} = req.body;
        if(!comname, !bustype || !gstin || !iec || !pan || !comemail || !comphone || !address || !state || !district || !pincode)
            return res.status(400).json({status: false, message: "Missing details"})
        return res.status(200).json({status: true})
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({status: false, message: "Internal server error"})
    }
}