import HealthController from '../health.controller';
import mockResponse from '../../utils/test.util';

describe('HealthController test', () => {
  const HEALTH_SERVER_MESSAGE = 'Server is healthy';
  it('should return 200 status and a message', async () => {
    const res = mockResponse();
    const req = {};
    await HealthController.checkHealth(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(HEALTH_SERVER_MESSAGE);
  });
});
