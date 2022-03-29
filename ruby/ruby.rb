require_relative "base58"
require 'json'

def bytes_to_base58(bytes)
  # pack bytes to ASCII then unpack to hexadecimal
  hex = bytes.pack("C*").unpack("H*").first
  Base58.encode(hex)
end

# Grab file
file = File.read('./example_keys.json')

keypair_in_bytes = JSON.parse(file);

public_key_bytes = keypair_in_bytes[(keypair_in_bytes.length / 2) ..-1]
private_key_bytes = keypair_in_bytes[0, keypair_in_bytes.length / 2]

puts "Keypair: ", bytes_to_base58(keypair_in_bytes)
puts "\nPublic Key: ", bytes_to_base58(public_key_bytes)
puts "\nPrivate Key: ", bytes_to_base58(private_key_bytes)