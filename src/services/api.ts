const ENDPOINT = 'https://hooks.zapier.com/hooks/catch/1888053/bgwofce/'

const uuid = (): string => crypto.randomUUID()

interface ApiResponse {
  attempt: string
  id: string
  request_id: string
  status: string
}

export const callInit = async (csid: string): Promise<ApiResponse> => {
  const payload = {
    customerId: 'dummy',
    action: 'init',
    customerSessionId: csid,
    activityType: 'LOGIN',
    uuid: uuid(),
    brand: 'SD',
    solution: 'ATO',
    iam: 'orel.gamliel7@gmail.com',
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error(`init failed: ${res.status}`)
  const data = await res.json()
  // console.log('callInit response:', data)
  return data
}

export const callGetScore = async (csid: string): Promise<ApiResponse> => {
  const payload = {
    customerId: 'dummy',
    action: 'getScore',
    customerSessionId: csid,
    activityType: 'PAYMENT',
    uuid: uuid(),
    brand: 'SD',
    solution: 'ATO',
    iam: 'orel.gamliel7@gmail.com',
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error(`getScore failed: ${res.status}`)
  const data = await res.json()
  // console.log('callGetScore response:', data)
  return data
}
