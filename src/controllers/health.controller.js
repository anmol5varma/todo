class HealthController {
  static async checkHealth(req, res) {
    return res.status(200).json('Server is healthy');
  }
}

export default HealthController;
