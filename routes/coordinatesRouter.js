import {Router} from "express";
import closureCalculate from '../lib/coordinates.js';

const router = new Router();

router.post('/calculatecoordinates',  async (req, res) => {
        try {
            const {height,radius,segments} = req.body;
            const apex = {x:0, y: 0, z:Number(height)};
            const coordinates = closureCalculate(radius,segments,height);
            return res.status(200).json({apex, coordinates});
        }catch (e) {
            return res.status(500).json({message: 'closureCalculate Error' + e.message});
        }
    }
)
export default router