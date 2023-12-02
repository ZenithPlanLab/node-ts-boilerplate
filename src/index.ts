export default async function main(payload: any): Promise<void> {
  try {
    console.info('Hello', payload)
  } catch (error) {
    console.error('Unhandled exception ', error)
    process.exit(1)
  }
}

void main(process.argv[2])
