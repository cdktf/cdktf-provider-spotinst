# `elastigroupAzureV3` Submodule <a name="`elastigroupAzureV3` Submodule" id="@cdktf/provider-spotinst.elastigroupAzureV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAzureV3 <a name="ElastigroupAzureV3" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3 spotinst_elastigroup_azure_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fallback_to_on_demand: typing.Union[bool, IResolvable],
  name: str,
  network: ElastigroupAzureV3Network,
  os: str,
  region: str,
  resource_group_name: str,
  vm_sizes: ElastigroupAzureV3VmSizes,
  custom_data: str = None,
  desired_capacity: typing.Union[int, float] = None,
  draining_timeout: typing.Union[int, float] = None,
  id: str = None,
  image: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Image]] = None,
  login: ElastigroupAzureV3Login = None,
  managed_service_identity: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ManagedServiceIdentity]] = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  on_demand_count: typing.Union[int, float] = None,
  scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicy]] = None,
  scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicy]] = None,
  spot_percentage: typing.Union[int, float] = None,
  tags: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Tags]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.fallbackToOnDemand">fallback_to_on_demand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.vmSizes">vm_sizes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a></code> | vm_sizes block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.image">image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]]</code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.managedServiceIdentity">managed_service_identity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]]</code> | managed_service_identity block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.onDemandCount">on_demand_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scalingDownPolicy">scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scalingUpPolicy">scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]]</code> | tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fallback_to_on_demand`<sup>Required</sup> <a name="fallback_to_on_demand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.fallbackToOnDemand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#network ElastigroupAzureV3#network}

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.os"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `vm_sizes`<sup>Required</sup> <a name="vm_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.vmSizes"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a>

vm_sizes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#vm_sizes ElastigroupAzureV3#vm_sizes}

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.customData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}.

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.desiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}.

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.drainingTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.image"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]]

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#image ElastigroupAzureV3#image}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.login"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#login ElastigroupAzureV3#login}

---

##### `managed_service_identity`<sup>Optional</sup> <a name="managed_service_identity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.managedServiceIdentity"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]]

managed_service_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#managed_service_identity ElastigroupAzureV3#managed_service_identity}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}.

---

##### `on_demand_count`<sup>Optional</sup> <a name="on_demand_count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.onDemandCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}.

---

##### `scaling_down_policy`<sup>Optional</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scalingDownPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#scaling_down_policy ElastigroupAzureV3#scaling_down_policy}

---

##### `scaling_up_policy`<sup>Optional</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scalingUpPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#scaling_up_policy ElastigroupAzureV3#scaling_up_policy}

---

##### `spot_percentage`<sup>Optional</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.spotPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#tags ElastigroupAzureV3#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin">put_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity">put_managed_service_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingDownPolicy">put_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingUpPolicy">put_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putVmSizes">put_vm_sizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetCustomData">reset_custom_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDesiredCapacity">reset_desired_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDrainingTimeout">reset_draining_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetLogin">reset_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetManagedServiceIdentity">reset_managed_service_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOnDemandCount">reset_on_demand_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetScalingDownPolicy">reset_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetScalingUpPolicy">reset_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetSpotPercentage">reset_spot_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_image` <a name="put_image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage"></a>

```python
def put_image(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Image]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]]

---

##### `put_login` <a name="put_login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin"></a>

```python
def put_login(
  user_name: str,
  password: str = None,
  ssh_public_key: str = None
) -> None
```

###### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}.

---

###### `ssh_public_key`<sup>Optional</sup> <a name="ssh_public_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin.parameter.sshPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}.

---

##### `put_managed_service_identity` <a name="put_managed_service_identity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity"></a>

```python
def put_managed_service_identity(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ManagedServiceIdentity]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]]

---

##### `put_network` <a name="put_network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork"></a>

```python
def put_network(
  network_interfaces: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfaces]],
  resource_group_name: str,
  virtual_network_name: str
) -> None
```

###### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork.parameter.networkInterfaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#network_interfaces ElastigroupAzureV3#network_interfaces}

---

###### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

###### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork.parameter.virtualNetworkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}.

---

##### `put_scaling_down_policy` <a name="put_scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingDownPolicy"></a>

```python
def put_scaling_down_policy(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingDownPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]]

---

##### `put_scaling_up_policy` <a name="put_scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingUpPolicy"></a>

```python
def put_scaling_up_policy(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingUpPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]]

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Tags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]]

---

##### `put_vm_sizes` <a name="put_vm_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putVmSizes"></a>

```python
def put_vm_sizes(
  od_sizes: typing.List[str],
  spot_sizes: typing.List[str]
) -> None
```

###### `od_sizes`<sup>Required</sup> <a name="od_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putVmSizes.parameter.odSizes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}.

---

###### `spot_sizes`<sup>Required</sup> <a name="spot_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putVmSizes.parameter.spotSizes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}.

---

##### `reset_custom_data` <a name="reset_custom_data" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetCustomData"></a>

```python
def reset_custom_data() -> None
```

##### `reset_desired_capacity` <a name="reset_desired_capacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDesiredCapacity"></a>

```python
def reset_desired_capacity() -> None
```

##### `reset_draining_timeout` <a name="reset_draining_timeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDrainingTimeout"></a>

```python
def reset_draining_timeout() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_login` <a name="reset_login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetLogin"></a>

```python
def reset_login() -> None
```

##### `reset_managed_service_identity` <a name="reset_managed_service_identity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetManagedServiceIdentity"></a>

```python
def reset_managed_service_identity() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_on_demand_count` <a name="reset_on_demand_count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOnDemandCount"></a>

```python
def reset_on_demand_count() -> None
```

##### `reset_scaling_down_policy` <a name="reset_scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetScalingDownPolicy"></a>

```python
def reset_scaling_down_policy() -> None
```

##### `reset_scaling_up_policy` <a name="reset_scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetScalingUpPolicy"></a>

```python
def reset_scaling_up_policy() -> None
```

##### `reset_spot_percentage` <a name="reset_spot_percentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetSpotPercentage"></a>

```python
def reset_spot_percentage() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ElastigroupAzureV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ElastigroupAzureV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElastigroupAzureV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElastigroupAzureV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElastigroupAzureV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList">ElastigroupAzureV3ImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference">ElastigroupAzureV3LoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentity">managed_service_identity</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList">ElastigroupAzureV3ManagedServiceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference">ElastigroupAzureV3NetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingDownPolicy">scaling_down_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList">ElastigroupAzureV3ScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingUpPolicy">scaling_up_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList">ElastigroupAzureV3ScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList">ElastigroupAzureV3TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.vmSizes">vm_sizes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference">ElastigroupAzureV3VmSizesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customDataInput">custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeoutInput">draining_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemandInput">fallback_to_on_demand_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.imageInput">image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.loginInput">login_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentityInput">managed_service_identity_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCountInput">on_demand_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingDownPolicyInput">scaling_down_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingUpPolicyInput">scaling_up_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentageInput">spot_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.vmSizesInput">vm_sizes_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customData">custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemand">fallback_to_on_demand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCount">on_demand_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.image"></a>

```python
image: ElastigroupAzureV3ImageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList">ElastigroupAzureV3ImageList</a>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.login"></a>

```python
login: ElastigroupAzureV3LoginOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference">ElastigroupAzureV3LoginOutputReference</a>

---

##### `managed_service_identity`<sup>Required</sup> <a name="managed_service_identity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentity"></a>

```python
managed_service_identity: ElastigroupAzureV3ManagedServiceIdentityList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList">ElastigroupAzureV3ManagedServiceIdentityList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.network"></a>

```python
network: ElastigroupAzureV3NetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference">ElastigroupAzureV3NetworkOutputReference</a>

---

##### `scaling_down_policy`<sup>Required</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingDownPolicy"></a>

```python
scaling_down_policy: ElastigroupAzureV3ScalingDownPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList">ElastigroupAzureV3ScalingDownPolicyList</a>

---

##### `scaling_up_policy`<sup>Required</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingUpPolicy"></a>

```python
scaling_up_policy: ElastigroupAzureV3ScalingUpPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList">ElastigroupAzureV3ScalingUpPolicyList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tags"></a>

```python
tags: ElastigroupAzureV3TagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList">ElastigroupAzureV3TagsList</a>

---

##### `vm_sizes`<sup>Required</sup> <a name="vm_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.vmSizes"></a>

```python
vm_sizes: ElastigroupAzureV3VmSizesOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference">ElastigroupAzureV3VmSizesOutputReference</a>

---

##### `custom_data_input`<sup>Optional</sup> <a name="custom_data_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customDataInput"></a>

```python
custom_data_input: str
```

- *Type:* str

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacityInput"></a>

```python
desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout_input`<sup>Optional</sup> <a name="draining_timeout_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeoutInput"></a>

```python
draining_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_to_on_demand_input`<sup>Optional</sup> <a name="fallback_to_on_demand_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemandInput"></a>

```python
fallback_to_on_demand_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.imageInput"></a>

```python
image_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Image]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]]

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.loginInput"></a>

```python
login_input: ElastigroupAzureV3Login
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---

##### `managed_service_identity_input`<sup>Optional</sup> <a name="managed_service_identity_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentityInput"></a>

```python
managed_service_identity_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ManagedServiceIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]]

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.networkInput"></a>

```python
network_input: ElastigroupAzureV3Network
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---

##### `on_demand_count_input`<sup>Optional</sup> <a name="on_demand_count_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCountInput"></a>

```python
on_demand_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scaling_down_policy_input`<sup>Optional</sup> <a name="scaling_down_policy_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingDownPolicyInput"></a>

```python
scaling_down_policy_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]]

---

##### `scaling_up_policy_input`<sup>Optional</sup> <a name="scaling_up_policy_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingUpPolicyInput"></a>

```python
scaling_up_policy_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]]

---

##### `spot_percentage_input`<sup>Optional</sup> <a name="spot_percentage_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentageInput"></a>

```python
spot_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Tags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]]

---

##### `vm_sizes_input`<sup>Optional</sup> <a name="vm_sizes_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.vmSizesInput"></a>

```python
vm_sizes_input: ElastigroupAzureV3VmSizes
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a>

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout`<sup>Required</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_to_on_demand`<sup>Required</sup> <a name="fallback_to_on_demand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemand"></a>

```python
fallback_to_on_demand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_demand_count`<sup>Required</sup> <a name="on_demand_count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCount"></a>

```python
on_demand_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `spot_percentage`<sup>Required</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentage"></a>

```python
spot_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAzureV3Config <a name="ElastigroupAzureV3Config" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fallback_to_on_demand: typing.Union[bool, IResolvable],
  name: str,
  network: ElastigroupAzureV3Network,
  os: str,
  region: str,
  resource_group_name: str,
  vm_sizes: ElastigroupAzureV3VmSizes,
  custom_data: str = None,
  desired_capacity: typing.Union[int, float] = None,
  draining_timeout: typing.Union[int, float] = None,
  id: str = None,
  image: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Image]] = None,
  login: ElastigroupAzureV3Login = None,
  managed_service_identity: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ManagedServiceIdentity]] = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  on_demand_count: typing.Union[int, float] = None,
  scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicy]] = None,
  scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicy]] = None,
  spot_percentage: typing.Union[int, float] = None,
  tags: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Tags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.fallbackToOnDemand">fallback_to_on_demand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.vmSizes">vm_sizes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a></code> | vm_sizes block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.image">image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]]</code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.managedServiceIdentity">managed_service_identity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]]</code> | managed_service_identity block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.onDemandCount">on_demand_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.scalingDownPolicy">scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.scalingUpPolicy">scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]]</code> | tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fallback_to_on_demand`<sup>Required</sup> <a name="fallback_to_on_demand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.fallbackToOnDemand"></a>

```python
fallback_to_on_demand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.network"></a>

```python
network: ElastigroupAzureV3Network
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#network ElastigroupAzureV3#network}

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.os"></a>

```python
os: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `vm_sizes`<sup>Required</sup> <a name="vm_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.vmSizes"></a>

```python
vm_sizes: ElastigroupAzureV3VmSizes
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a>

vm_sizes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#vm_sizes ElastigroupAzureV3#vm_sizes}

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}.

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}.

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.image"></a>

```python
image: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Image]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]]

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#image ElastigroupAzureV3#image}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.login"></a>

```python
login: ElastigroupAzureV3Login
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#login ElastigroupAzureV3#login}

---

##### `managed_service_identity`<sup>Optional</sup> <a name="managed_service_identity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.managedServiceIdentity"></a>

```python
managed_service_identity: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ManagedServiceIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]]

managed_service_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#managed_service_identity ElastigroupAzureV3#managed_service_identity}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}.

---

##### `on_demand_count`<sup>Optional</sup> <a name="on_demand_count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.onDemandCount"></a>

```python
on_demand_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}.

---

##### `scaling_down_policy`<sup>Optional</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.scalingDownPolicy"></a>

```python
scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#scaling_down_policy ElastigroupAzureV3#scaling_down_policy}

---

##### `scaling_up_policy`<sup>Optional</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.scalingUpPolicy"></a>

```python
scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#scaling_up_policy ElastigroupAzureV3#scaling_up_policy}

---

##### `spot_percentage`<sup>Optional</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotPercentage"></a>

```python
spot_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Tags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#tags ElastigroupAzureV3#tags}

---

### ElastigroupAzureV3Image <a name="ElastigroupAzureV3Image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3Image(
  custom: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageCustom]] = None,
  gallery_image: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageGalleryImage]] = None,
  marketplace: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageMarketplace]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.custom">custom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>]]</code> | custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.galleryImage">gallery_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage">ElastigroupAzureV3ImageGalleryImage</a>]]</code> | gallery_image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.marketplace">marketplace</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>]]</code> | marketplace block. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.custom"></a>

```python
custom: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>]]

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#custom ElastigroupAzureV3#custom}

---

##### `gallery_image`<sup>Optional</sup> <a name="gallery_image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.galleryImage"></a>

```python
gallery_image: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageGalleryImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage">ElastigroupAzureV3ImageGalleryImage</a>]]

gallery_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#gallery_image ElastigroupAzureV3#gallery_image}

---

##### `marketplace`<sup>Optional</sup> <a name="marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.marketplace"></a>

```python
marketplace: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageMarketplace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>]]

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#marketplace ElastigroupAzureV3#marketplace}

---

### ElastigroupAzureV3ImageCustom <a name="ElastigroupAzureV3ImageCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageCustom(
  image_name: str,
  resource_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3ImageGalleryImage <a name="ElastigroupAzureV3ImageGalleryImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage(
  gallery_name: str,
  image_name: str,
  resource_group_name: str,
  version: str,
  spot_account_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.galleryName">gallery_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#gallery_name ElastigroupAzureV3#gallery_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.spotAccountId">spot_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#spot_account_id ElastigroupAzureV3#spot_account_id}. |

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#gallery_name ElastigroupAzureV3#gallery_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}.

---

##### `spot_account_id`<sup>Optional</sup> <a name="spot_account_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.spotAccountId"></a>

```python
spot_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#spot_account_id ElastigroupAzureV3#spot_account_id}.

---

### ElastigroupAzureV3ImageMarketplace <a name="ElastigroupAzureV3ImageMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace(
  offer: str,
  publisher: str,
  sku: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}.

---

### ElastigroupAzureV3Login <a name="ElastigroupAzureV3Login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3Login(
  user_name: str,
  password: str = None,
  ssh_public_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}. |

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}.

---

##### `ssh_public_key`<sup>Optional</sup> <a name="ssh_public_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}.

---

### ElastigroupAzureV3ManagedServiceIdentity <a name="ElastigroupAzureV3ManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity(
  name: str,
  resource_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3Network <a name="ElastigroupAzureV3Network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3Network(
  network_interfaces: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfaces]],
  resource_group_name: str,
  virtual_network_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}. |

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.networkInterfaces"></a>

```python
network_interfaces: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#network_interfaces ElastigroupAzureV3#network_interfaces}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}.

---

### ElastigroupAzureV3NetworkNetworkInterfaces <a name="ElastigroupAzureV3NetworkNetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces(
  assign_public_ip: typing.Union[bool, IResolvable],
  is_primary: typing.Union[bool, IResolvable],
  subnet_name: str,
  additional_ip_configs: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs]] = None,
  application_security_group: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.subnetName">subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.additionalIpConfigs">additional_ip_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>]]</code> | additional_ip_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.applicationSecurityGroup">application_security_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>]]</code> | application_security_group block. |

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}.

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}.

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}.

---

##### `additional_ip_configs`<sup>Optional</sup> <a name="additional_ip_configs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.additionalIpConfigs"></a>

```python
additional_ip_configs: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>]]

additional_ip_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#additional_ip_configs ElastigroupAzureV3#additional_ip_configs}

---

##### `application_security_group`<sup>Optional</sup> <a name="application_security_group" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.applicationSecurityGroup"></a>

```python
application_security_group: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>]]

application_security_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#application_security_group ElastigroupAzureV3#application_security_group}

---

### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs(
  name: str,
  private_ip_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.privateIpVersion">private_ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `private_ip_version`<sup>Optional</sup> <a name="private_ip_version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.privateIpVersion"></a>

```python
private_ip_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}.

---

### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup(
  name: str,
  resource_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3ScalingDownPolicy <a name="ElastigroupAzureV3ScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy(
  action: ElastigroupAzureV3ScalingDownPolicyAction,
  cooldown: typing.Union[int, float],
  evaluation_periods: typing.Union[int, float],
  metric_name: str,
  namespace: str,
  operator: str,
  period: typing.Union[int, float],
  policy_name: str,
  statistic: str,
  threshold: typing.Union[int, float],
  dimensions: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicyDimensions]] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  source: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.action">action</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions">ElastigroupAzureV3ScalingDownPolicyDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.action"></a>

```python
action: ElastigroupAzureV3ScalingDownPolicyAction
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#action ElastigroupAzureV3#action}

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}.

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions">ElastigroupAzureV3ScalingDownPolicyDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#dimensions ElastigroupAzureV3#dimensions}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}.

---

### ElastigroupAzureV3ScalingDownPolicyAction <a name="ElastigroupAzureV3ScalingDownPolicyAction" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction(
  adjustment: str = None,
  maximum: str = None,
  minimum: str = None,
  target: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.adjustment">adjustment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.maximum">maximum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.minimum">minimum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}. |

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}.

---

### ElastigroupAzureV3ScalingDownPolicyDimensions <a name="ElastigroupAzureV3ScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}.

---

### ElastigroupAzureV3ScalingUpPolicy <a name="ElastigroupAzureV3ScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy(
  action: ElastigroupAzureV3ScalingUpPolicyAction,
  cooldown: typing.Union[int, float],
  evaluation_periods: typing.Union[int, float],
  metric_name: str,
  namespace: str,
  operator: str,
  period: typing.Union[int, float],
  policy_name: str,
  statistic: str,
  threshold: typing.Union[int, float],
  dimensions: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicyDimensions]] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  source: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.action">action</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions">ElastigroupAzureV3ScalingUpPolicyDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.action"></a>

```python
action: ElastigroupAzureV3ScalingUpPolicyAction
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#action ElastigroupAzureV3#action}

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}.

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions">ElastigroupAzureV3ScalingUpPolicyDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#dimensions ElastigroupAzureV3#dimensions}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}.

---

### ElastigroupAzureV3ScalingUpPolicyAction <a name="ElastigroupAzureV3ScalingUpPolicyAction" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction(
  adjustment: str = None,
  maximum: str = None,
  minimum: str = None,
  target: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.adjustment">adjustment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.maximum">maximum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.minimum">minimum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}. |

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}.

---

### ElastigroupAzureV3ScalingUpPolicyDimensions <a name="ElastigroupAzureV3ScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}.

---

### ElastigroupAzureV3Tags <a name="ElastigroupAzureV3Tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3Tags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#key ElastigroupAzureV3#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#key ElastigroupAzureV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}.

---

### ElastigroupAzureV3VmSizes <a name="ElastigroupAzureV3VmSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3VmSizes(
  od_sizes: typing.List[str],
  spot_sizes: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.property.odSizes">od_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.property.spotSizes">spot_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}. |

---

##### `od_sizes`<sup>Required</sup> <a name="od_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.property.odSizes"></a>

```python
od_sizes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}.

---

##### `spot_sizes`<sup>Required</sup> <a name="spot_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.property.spotSizes"></a>

```python
spot_sizes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAzureV3ImageCustomList <a name="ElastigroupAzureV3ImageCustomList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageCustomList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3ImageCustomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>]]

---


### ElastigroupAzureV3ImageCustomOutputReference <a name="ElastigroupAzureV3ImageCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3ImageCustom]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>]

---


### ElastigroupAzureV3ImageGalleryImageList <a name="ElastigroupAzureV3ImageGalleryImageList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3ImageGalleryImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage">ElastigroupAzureV3ImageGalleryImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageGalleryImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage">ElastigroupAzureV3ImageGalleryImage</a>]]

---


### ElastigroupAzureV3ImageGalleryImageOutputReference <a name="ElastigroupAzureV3ImageGalleryImageOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resetSpotAccountId">reset_spot_account_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_spot_account_id` <a name="reset_spot_account_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resetSpotAccountId"></a>

```python
def reset_spot_account_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.galleryNameInput">gallery_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.spotAccountIdInput">spot_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.galleryName">gallery_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.spotAccountId">spot_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage">ElastigroupAzureV3ImageGalleryImage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gallery_name_input`<sup>Optional</sup> <a name="gallery_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.galleryNameInput"></a>

```python
gallery_name_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `spot_account_id_input`<sup>Optional</sup> <a name="spot_account_id_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.spotAccountIdInput"></a>

```python
spot_account_id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `spot_account_id`<sup>Required</sup> <a name="spot_account_id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.spotAccountId"></a>

```python
spot_account_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3ImageGalleryImage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage">ElastigroupAzureV3ImageGalleryImage</a>]

---


### ElastigroupAzureV3ImageList <a name="ElastigroupAzureV3ImageList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3ImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Image]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]]

---


### ElastigroupAzureV3ImageMarketplaceList <a name="ElastigroupAzureV3ImageMarketplaceList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3ImageMarketplaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageMarketplace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>]]

---


### ElastigroupAzureV3ImageMarketplaceOutputReference <a name="ElastigroupAzureV3ImageMarketplaceOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3ImageMarketplace]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>]

---


### ElastigroupAzureV3ImageOutputReference <a name="ElastigroupAzureV3ImageOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putGalleryImage">put_gallery_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace">put_marketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetGalleryImage">reset_gallery_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetMarketplace">reset_marketplace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom` <a name="put_custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom"></a>

```python
def put_custom(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageCustom]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>]]

---

##### `put_gallery_image` <a name="put_gallery_image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putGalleryImage"></a>

```python
def put_gallery_image(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageGalleryImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putGalleryImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage">ElastigroupAzureV3ImageGalleryImage</a>]]

---

##### `put_marketplace` <a name="put_marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace"></a>

```python
def put_marketplace(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageMarketplace]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>]]

---

##### `reset_custom` <a name="reset_custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_gallery_image` <a name="reset_gallery_image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetGalleryImage"></a>

```python
def reset_gallery_image() -> None
```

##### `reset_marketplace` <a name="reset_marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetMarketplace"></a>

```python
def reset_marketplace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList">ElastigroupAzureV3ImageCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.galleryImage">gallery_image</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList">ElastigroupAzureV3ImageGalleryImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplace">marketplace</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList">ElastigroupAzureV3ImageMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.customInput">custom_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.galleryImageInput">gallery_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage">ElastigroupAzureV3ImageGalleryImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplaceInput">marketplace_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.custom"></a>

```python
custom: ElastigroupAzureV3ImageCustomList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList">ElastigroupAzureV3ImageCustomList</a>

---

##### `gallery_image`<sup>Required</sup> <a name="gallery_image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.galleryImage"></a>

```python
gallery_image: ElastigroupAzureV3ImageGalleryImageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList">ElastigroupAzureV3ImageGalleryImageList</a>

---

##### `marketplace`<sup>Required</sup> <a name="marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplace"></a>

```python
marketplace: ElastigroupAzureV3ImageMarketplaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList">ElastigroupAzureV3ImageMarketplaceList</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.customInput"></a>

```python
custom_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>]]

---

##### `gallery_image_input`<sup>Optional</sup> <a name="gallery_image_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.galleryImageInput"></a>

```python
gallery_image_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageGalleryImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage">ElastigroupAzureV3ImageGalleryImage</a>]]

---

##### `marketplace_input`<sup>Optional</sup> <a name="marketplace_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplaceInput"></a>

```python
marketplace_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ImageMarketplace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3Image]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>]

---


### ElastigroupAzureV3LoginOutputReference <a name="ElastigroupAzureV3LoginOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetSshPublicKey">reset_ssh_public_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_ssh_public_key` <a name="reset_ssh_public_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetSshPublicKey"></a>

```python
def reset_ssh_public_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKeyInput">ssh_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `ssh_public_key_input`<sup>Optional</sup> <a name="ssh_public_key_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKeyInput"></a>

```python
ssh_public_key_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_public_key`<sup>Required</sup> <a name="ssh_public_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureV3Login
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---


### ElastigroupAzureV3ManagedServiceIdentityList <a name="ElastigroupAzureV3ManagedServiceIdentityList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3ManagedServiceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ManagedServiceIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]]

---


### ElastigroupAzureV3ManagedServiceIdentityOutputReference <a name="ElastigroupAzureV3ManagedServiceIdentityOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3ManagedServiceIdentity]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>]

---


### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>]]

---


### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resetPrivateIpVersion">reset_private_ip_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_private_ip_version` <a name="reset_private_ip_version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resetPrivateIpVersion"></a>

```python
def reset_private_ip_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersionInput">private_ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersion">private_ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_ip_version_input`<sup>Optional</sup> <a name="private_ip_version_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersionInput"></a>

```python
private_ip_version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip_version`<sup>Required</sup> <a name="private_ip_version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersion"></a>

```python
private_ip_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>]

---


### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>]]

---


### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>]

---


### ElastigroupAzureV3NetworkNetworkInterfacesList <a name="ElastigroupAzureV3NetworkNetworkInterfacesList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3NetworkNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]]

---


### ElastigroupAzureV3NetworkNetworkInterfacesOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs">put_additional_ip_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup">put_application_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetAdditionalIpConfigs">reset_additional_ip_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetApplicationSecurityGroup">reset_application_security_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_ip_configs` <a name="put_additional_ip_configs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs"></a>

```python
def put_additional_ip_configs(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>]]

---

##### `put_application_security_group` <a name="put_application_security_group" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup"></a>

```python
def put_application_security_group(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>]]

---

##### `reset_additional_ip_configs` <a name="reset_additional_ip_configs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetAdditionalIpConfigs"></a>

```python
def reset_additional_ip_configs() -> None
```

##### `reset_application_security_group` <a name="reset_application_security_group" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetApplicationSecurityGroup"></a>

```python
def reset_application_security_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigs">additional_ip_configs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroup">application_security_group</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigsInput">additional_ip_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroupInput">application_security_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimaryInput">is_primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetNameInput">subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetName">subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_ip_configs`<sup>Required</sup> <a name="additional_ip_configs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigs"></a>

```python
additional_ip_configs: ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList</a>

---

##### `application_security_group`<sup>Required</sup> <a name="application_security_group" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroup"></a>

```python
application_security_group: ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList</a>

---

##### `additional_ip_configs_input`<sup>Optional</sup> <a name="additional_ip_configs_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigsInput"></a>

```python
additional_ip_configs_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>]]

---

##### `application_security_group_input`<sup>Optional</sup> <a name="application_security_group_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroupInput"></a>

```python
application_security_group_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>]]

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary_input`<sup>Optional</sup> <a name="is_primary_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimaryInput"></a>

```python
is_primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_name_input`<sup>Optional</sup> <a name="subnet_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetNameInput"></a>

```python
subnet_name_input: str
```

- *Type:* str

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3NetworkNetworkInterfaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]

---


### ElastigroupAzureV3NetworkOutputReference <a name="ElastigroupAzureV3NetworkOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList">ElastigroupAzureV3NetworkNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkNameInput">virtual_network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfaces"></a>

```python
network_interfaces: ElastigroupAzureV3NetworkNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList">ElastigroupAzureV3NetworkNetworkInterfacesList</a>

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfacesInput"></a>

```python
network_interfaces_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3NetworkNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>]]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `virtual_network_name_input`<sup>Optional</sup> <a name="virtual_network_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkNameInput"></a>

```python
virtual_network_name_input: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureV3Network
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---


### ElastigroupAzureV3ScalingDownPolicyActionOutputReference <a name="ElastigroupAzureV3ScalingDownPolicyActionOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.maximumInput">maximum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.minimumInput">minimum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.adjustment">adjustment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.maximum">maximum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.minimum">minimum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: str
```

- *Type:* str

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.maximumInput"></a>

```python
maximum_input: str
```

- *Type:* str

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.minimumInput"></a>

```python
minimum_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureV3ScalingDownPolicyAction
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a>

---


### ElastigroupAzureV3ScalingDownPolicyDimensionsList <a name="ElastigroupAzureV3ScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions">ElastigroupAzureV3ScalingDownPolicyDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions">ElastigroupAzureV3ScalingDownPolicyDimensions</a>]]

---


### ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference <a name="ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions">ElastigroupAzureV3ScalingDownPolicyDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3ScalingDownPolicyDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions">ElastigroupAzureV3ScalingDownPolicyDimensions</a>]

---


### ElastigroupAzureV3ScalingDownPolicyList <a name="ElastigroupAzureV3ScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3ScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]]

---


### ElastigroupAzureV3ScalingDownPolicyOutputReference <a name="ElastigroupAzureV3ScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction"></a>

```python
def put_action(
  adjustment: str = None,
  maximum: str = None,
  minimum: str = None,
  target: str = None,
  type: str = None
) -> None
```

###### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction.parameter.adjustment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}.

---

###### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction.parameter.maximum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}.

---

###### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction.parameter.minimum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}.

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}.

---

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicyDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions">ElastigroupAzureV3ScalingDownPolicyDimensions</a>]]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference">ElastigroupAzureV3ScalingDownPolicyActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList">ElastigroupAzureV3ScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions">ElastigroupAzureV3ScalingDownPolicyDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.action"></a>

```python
action: ElastigroupAzureV3ScalingDownPolicyActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference">ElastigroupAzureV3ScalingDownPolicyActionOutputReference</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.dimensions"></a>

```python
dimensions: ElastigroupAzureV3ScalingDownPolicyDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList">ElastigroupAzureV3ScalingDownPolicyDimensionsList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.actionInput"></a>

```python
action_input: ElastigroupAzureV3ScalingDownPolicyAction
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a>

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions">ElastigroupAzureV3ScalingDownPolicyDimensions</a>]]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3ScalingDownPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy">ElastigroupAzureV3ScalingDownPolicy</a>]

---


### ElastigroupAzureV3ScalingUpPolicyActionOutputReference <a name="ElastigroupAzureV3ScalingUpPolicyActionOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.maximumInput">maximum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.minimumInput">minimum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.adjustment">adjustment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.maximum">maximum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.minimum">minimum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: str
```

- *Type:* str

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.maximumInput"></a>

```python
maximum_input: str
```

- *Type:* str

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.minimumInput"></a>

```python
minimum_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureV3ScalingUpPolicyAction
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a>

---


### ElastigroupAzureV3ScalingUpPolicyDimensionsList <a name="ElastigroupAzureV3ScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions">ElastigroupAzureV3ScalingUpPolicyDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions">ElastigroupAzureV3ScalingUpPolicyDimensions</a>]]

---


### ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference <a name="ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions">ElastigroupAzureV3ScalingUpPolicyDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3ScalingUpPolicyDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions">ElastigroupAzureV3ScalingUpPolicyDimensions</a>]

---


### ElastigroupAzureV3ScalingUpPolicyList <a name="ElastigroupAzureV3ScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3ScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]]

---


### ElastigroupAzureV3ScalingUpPolicyOutputReference <a name="ElastigroupAzureV3ScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction"></a>

```python
def put_action(
  adjustment: str = None,
  maximum: str = None,
  minimum: str = None,
  target: str = None,
  type: str = None
) -> None
```

###### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction.parameter.adjustment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}.

---

###### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction.parameter.maximum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}.

---

###### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction.parameter.minimum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}.

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.194.1/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}.

---

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicyDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions">ElastigroupAzureV3ScalingUpPolicyDimensions</a>]]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference">ElastigroupAzureV3ScalingUpPolicyActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList">ElastigroupAzureV3ScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions">ElastigroupAzureV3ScalingUpPolicyDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.action"></a>

```python
action: ElastigroupAzureV3ScalingUpPolicyActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference">ElastigroupAzureV3ScalingUpPolicyActionOutputReference</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.dimensions"></a>

```python
dimensions: ElastigroupAzureV3ScalingUpPolicyDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList">ElastigroupAzureV3ScalingUpPolicyDimensionsList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.actionInput"></a>

```python
action_input: ElastigroupAzureV3ScalingUpPolicyAction
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a>

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[ElastigroupAzureV3ScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions">ElastigroupAzureV3ScalingUpPolicyDimensions</a>]]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3ScalingUpPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy">ElastigroupAzureV3ScalingUpPolicy</a>]

---


### ElastigroupAzureV3TagsList <a name="ElastigroupAzureV3TagsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3TagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureV3TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureV3Tags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]]

---


### ElastigroupAzureV3TagsOutputReference <a name="ElastigroupAzureV3TagsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureV3Tags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>]

---


### ElastigroupAzureV3VmSizesOutputReference <a name="ElastigroupAzureV3VmSizesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure_v3

elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.odSizesInput">od_sizes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.spotSizesInput">spot_sizes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.odSizes">od_sizes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.spotSizes">spot_sizes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `od_sizes_input`<sup>Optional</sup> <a name="od_sizes_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.odSizesInput"></a>

```python
od_sizes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_sizes_input`<sup>Optional</sup> <a name="spot_sizes_input" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.spotSizesInput"></a>

```python
spot_sizes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `od_sizes`<sup>Required</sup> <a name="od_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.odSizes"></a>

```python
od_sizes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_sizes`<sup>Required</sup> <a name="spot_sizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.spotSizes"></a>

```python
spot_sizes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureV3VmSizes
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a>

---



