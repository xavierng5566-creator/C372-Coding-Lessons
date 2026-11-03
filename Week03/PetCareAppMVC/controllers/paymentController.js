const mockServices = require('../data/mockServices');

function preparePayment(req, res) {
  const serviceId = req.params.serviceId;

  if (typeof serviceId !== 'string' || !/^S\d{3}$/.test(serviceId)) {
    return res.status(400).json({ error: 'Invalid service ID' });
  }

  const service = mockServices.find(item => item.serviceId === serviceId);

  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  return res.status(200).json({
    serviceId: service.serviceId,
    serviceName: service.serviceName,
    amount: service.amount,
    currency: 'SGD',
    status: 'READY_FOR_PAYMENT'
  });
}

module.exports = { preparePayment };
