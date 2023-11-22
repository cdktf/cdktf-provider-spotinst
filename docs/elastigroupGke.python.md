# `spotinst_elastigroup_gke`

Refer to the Terraform Registory for docs: [`spotinst_elastigroup_gke`](https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke).

# `elastigroupGke` Submodule <a name="`elastigroupGke` Submodule" id="@cdktf/provider-spotinst.elastigroupGke"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupGke <a name="ElastigroupGke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke spotinst_elastigroup_gke}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGke(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_zone_name: str,
  desired_capacity: typing.Union[int, float],
  name: str,
  backend_services: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServices]] = None,
  cluster_id: str = None,
  disk: typing.Union[IResolvable, typing.List[ElastigroupGkeDisk]] = None,
  draining_timeout: typing.Union[int, float] = None,
  fallback_to_ondemand: typing.Union[bool, IResolvable] = None,
  gpu: typing.Union[IResolvable, typing.List[ElastigroupGkeGpu]] = None,
  id: str = None,
  instance_name_prefix: str = None,
  instance_types_custom: typing.Union[IResolvable, typing.List[ElastigroupGkeInstanceTypesCustom]] = None,
  instance_types_ondemand: str = None,
  instance_types_preemptible: typing.List[str] = None,
  integration_docker_swarm: ElastigroupGkeIntegrationDockerSwarm = None,
  integration_gke: ElastigroupGkeIntegrationGke = None,
  ip_forwarding: typing.Union[bool, IResolvable] = None,
  labels: typing.Union[IResolvable, typing.List[ElastigroupGkeLabels]] = None,
  max_size: typing.Union[int, float] = None,
  metadata: typing.Union[IResolvable, typing.List[ElastigroupGkeMetadata]] = None,
  min_size: typing.Union[int, float] = None,
  network_interface: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterface]] = None,
  node_image: str = None,
  ondemand_count: typing.Union[int, float] = None,
  preemptible_percentage: typing.Union[int, float] = None,
  provisioning_model: str = None,
  scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicy]] = None,
  scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicy]] = None,
  service_account: str = None,
  shutdown_script: str = None,
  startup_script: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.clusterZoneName">cluster_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_zone_name ElastigroupGke#cluster_zone_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#desired_capacity ElastigroupGke#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.backendServices">backend_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]]</code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#draining_timeout ElastigroupGke#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#fallback_to_ondemand ElastigroupGke#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.gpu">gpu</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]]</code> | gpu block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#id ElastigroupGke#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.instanceNamePrefix">instance_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_name_prefix ElastigroupGke#instance_name_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.instanceTypesCustom">instance_types_custom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]]</code> | instance_types_custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.instanceTypesOndemand">instance_types_ondemand</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_ondemand ElastigroupGke#instance_types_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.instanceTypesPreemptible">instance_types_preemptible</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_preemptible ElastigroupGke#instance_types_preemptible}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.integrationDockerSwarm">integration_docker_swarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a></code> | integration_docker_swarm block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.integrationGke">integration_gke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a></code> | integration_gke block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.ipForwarding">ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ip_forwarding ElastigroupGke#ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#max_size ElastigroupGke#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]]</code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#min_size ElastigroupGke#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.nodeImage">node_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#node_image ElastigroupGke#node_image}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.ondemandCount">ondemand_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ondemand_count ElastigroupGke#ondemand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.preemptiblePercentage">preemptible_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#preemptible_percentage ElastigroupGke#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.provisioningModel">provisioning_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#provisioning_model ElastigroupGke#provisioning_model}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.scalingDownPolicy">scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.scalingUpPolicy">scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#service_account ElastigroupGke#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.shutdownScript">shutdown_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#shutdown_script ElastigroupGke#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.startupScript">startup_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#startup_script ElastigroupGke#startup_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#tags ElastigroupGke#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_zone_name`<sup>Required</sup> <a name="cluster_zone_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.clusterZoneName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_zone_name ElastigroupGke#cluster_zone_name}.

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.desiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#desired_capacity ElastigroupGke#desired_capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `backend_services`<sup>Optional</sup> <a name="backend_services" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.backendServices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]]

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#backend_services ElastigroupGke#backend_services}

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.disk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#disk ElastigroupGke#disk}

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.drainingTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#draining_timeout ElastigroupGke#draining_timeout}.

---

##### `fallback_to_ondemand`<sup>Optional</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.fallbackToOndemand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#fallback_to_ondemand ElastigroupGke#fallback_to_ondemand}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.gpu"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]]

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#gpu ElastigroupGke#gpu}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#id ElastigroupGke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_name_prefix`<sup>Optional</sup> <a name="instance_name_prefix" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.instanceNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_name_prefix ElastigroupGke#instance_name_prefix}.

---

##### `instance_types_custom`<sup>Optional</sup> <a name="instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.instanceTypesCustom"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]]

instance_types_custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_custom ElastigroupGke#instance_types_custom}

---

##### `instance_types_ondemand`<sup>Optional</sup> <a name="instance_types_ondemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.instanceTypesOndemand"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_ondemand ElastigroupGke#instance_types_ondemand}.

---

##### `instance_types_preemptible`<sup>Optional</sup> <a name="instance_types_preemptible" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.instanceTypesPreemptible"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_preemptible ElastigroupGke#instance_types_preemptible}.

---

##### `integration_docker_swarm`<sup>Optional</sup> <a name="integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.integrationDockerSwarm"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a>

integration_docker_swarm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#integration_docker_swarm ElastigroupGke#integration_docker_swarm}

---

##### `integration_gke`<sup>Optional</sup> <a name="integration_gke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.integrationGke"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a>

integration_gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#integration_gke ElastigroupGke#integration_gke}

---

##### `ip_forwarding`<sup>Optional</sup> <a name="ip_forwarding" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.ipForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ip_forwarding ElastigroupGke#ip_forwarding}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#labels ElastigroupGke#labels}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#max_size ElastigroupGke#max_size}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.metadata"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#metadata ElastigroupGke#metadata}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#min_size ElastigroupGke#min_size}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#network_interface ElastigroupGke#network_interface}

---

##### `node_image`<sup>Optional</sup> <a name="node_image" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.nodeImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#node_image ElastigroupGke#node_image}.

---

##### `ondemand_count`<sup>Optional</sup> <a name="ondemand_count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.ondemandCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ondemand_count ElastigroupGke#ondemand_count}.

---

##### `preemptible_percentage`<sup>Optional</sup> <a name="preemptible_percentage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.preemptiblePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#preemptible_percentage ElastigroupGke#preemptible_percentage}.

---

##### `provisioning_model`<sup>Optional</sup> <a name="provisioning_model" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.provisioningModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#provisioning_model ElastigroupGke#provisioning_model}.

---

##### `scaling_down_policy`<sup>Optional</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.scalingDownPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#scaling_down_policy ElastigroupGke#scaling_down_policy}

---

##### `scaling_up_policy`<sup>Optional</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.scalingUpPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#scaling_up_policy ElastigroupGke#scaling_up_policy}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#service_account ElastigroupGke#service_account}.

---

##### `shutdown_script`<sup>Optional</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.shutdownScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#shutdown_script ElastigroupGke#shutdown_script}.

---

##### `startup_script`<sup>Optional</sup> <a name="startup_script" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.startupScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#startup_script ElastigroupGke#startup_script}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#tags ElastigroupGke#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putBackendServices">put_backend_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putDisk">put_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putGpu">put_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putInstanceTypesCustom">put_instance_types_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationDockerSwarm">put_integration_docker_swarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke">put_integration_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingDownPolicy">put_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingUpPolicy">put_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetBackendServices">reset_backend_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetDisk">reset_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetDrainingTimeout">reset_draining_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetFallbackToOndemand">reset_fallback_to_ondemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetGpu">reset_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceNamePrefix">reset_instance_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesCustom">reset_instance_types_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesOndemand">reset_instance_types_ondemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesPreemptible">reset_instance_types_preemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIntegrationDockerSwarm">reset_integration_docker_swarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIntegrationGke">reset_integration_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIpForwarding">reset_ip_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetNodeImage">reset_node_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetOndemandCount">reset_ondemand_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetPreemptiblePercentage">reset_preemptible_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetProvisioningModel">reset_provisioning_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetScalingDownPolicy">reset_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetScalingUpPolicy">reset_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetShutdownScript">reset_shutdown_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetStartupScript">reset_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_backend_services` <a name="put_backend_services" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putBackendServices"></a>

```python
def put_backend_services(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putBackendServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]]

---

##### `put_disk` <a name="put_disk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putDisk"></a>

```python
def put_disk(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]]

---

##### `put_gpu` <a name="put_gpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putGpu"></a>

```python
def put_gpu(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeGpu]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putGpu.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]]

---

##### `put_instance_types_custom` <a name="put_instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putInstanceTypesCustom"></a>

```python
def put_instance_types_custom(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeInstanceTypesCustom]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putInstanceTypesCustom.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]]

---

##### `put_integration_docker_swarm` <a name="put_integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationDockerSwarm"></a>

```python
def put_integration_docker_swarm(
  master_host: str,
  master_port: typing.Union[int, float]
) -> None
```

###### `master_host`<sup>Required</sup> <a name="master_host" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationDockerSwarm.parameter.masterHost"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#master_host ElastigroupGke#master_host}.

---

###### `master_port`<sup>Required</sup> <a name="master_port" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationDockerSwarm.parameter.masterPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#master_port ElastigroupGke#master_port}.

---

##### `put_integration_gke` <a name="put_integration_gke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke"></a>

```python
def put_integration_gke(
  autoscale_cooldown: typing.Union[int, float] = None,
  autoscale_down: ElastigroupGkeIntegrationGkeAutoscaleDown = None,
  autoscale_headroom: ElastigroupGkeIntegrationGkeAutoscaleHeadroom = None,
  autoscale_is_auto_config: typing.Union[bool, IResolvable] = None,
  autoscale_is_enabled: typing.Union[bool, IResolvable] = None,
  autoscale_labels: typing.Union[IResolvable, typing.List[ElastigroupGkeIntegrationGkeAutoscaleLabels]] = None,
  auto_update: typing.Union[bool, IResolvable] = None,
  cluster_id: str = None,
  location: str = None
) -> None
```

###### `autoscale_cooldown`<sup>Optional</sup> <a name="autoscale_cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.autoscaleCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_cooldown ElastigroupGke#autoscale_cooldown}.

---

###### `autoscale_down`<sup>Optional</sup> <a name="autoscale_down" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.autoscaleDown"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_down ElastigroupGke#autoscale_down}

---

###### `autoscale_headroom`<sup>Optional</sup> <a name="autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.autoscaleHeadroom"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_headroom ElastigroupGke#autoscale_headroom}

---

###### `autoscale_is_auto_config`<sup>Optional</sup> <a name="autoscale_is_auto_config" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.autoscaleIsAutoConfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_is_auto_config ElastigroupGke#autoscale_is_auto_config}.

---

###### `autoscale_is_enabled`<sup>Optional</sup> <a name="autoscale_is_enabled" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.autoscaleIsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_is_enabled ElastigroupGke#autoscale_is_enabled}.

---

###### `autoscale_labels`<sup>Optional</sup> <a name="autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.autoscaleLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]]

autoscale_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_labels ElastigroupGke#autoscale_labels}

---

###### `auto_update`<sup>Optional</sup> <a name="auto_update" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.autoUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#auto_update ElastigroupGke#auto_update}.

---

###### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}.

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#location ElastigroupGke#location}.

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]]

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putMetadata"></a>

```python
def put_metadata(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeMetadata]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putMetadata.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]]

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]]

---

##### `put_scaling_down_policy` <a name="put_scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingDownPolicy"></a>

```python
def put_scaling_down_policy(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingDownPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]]

---

##### `put_scaling_up_policy` <a name="put_scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingUpPolicy"></a>

```python
def put_scaling_up_policy(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingUpPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]]

---

##### `reset_backend_services` <a name="reset_backend_services" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetBackendServices"></a>

```python
def reset_backend_services() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_disk` <a name="reset_disk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetDisk"></a>

```python
def reset_disk() -> None
```

##### `reset_draining_timeout` <a name="reset_draining_timeout" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetDrainingTimeout"></a>

```python
def reset_draining_timeout() -> None
```

##### `reset_fallback_to_ondemand` <a name="reset_fallback_to_ondemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetFallbackToOndemand"></a>

```python
def reset_fallback_to_ondemand() -> None
```

##### `reset_gpu` <a name="reset_gpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetGpu"></a>

```python
def reset_gpu() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_name_prefix` <a name="reset_instance_name_prefix" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceNamePrefix"></a>

```python
def reset_instance_name_prefix() -> None
```

##### `reset_instance_types_custom` <a name="reset_instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesCustom"></a>

```python
def reset_instance_types_custom() -> None
```

##### `reset_instance_types_ondemand` <a name="reset_instance_types_ondemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesOndemand"></a>

```python
def reset_instance_types_ondemand() -> None
```

##### `reset_instance_types_preemptible` <a name="reset_instance_types_preemptible" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesPreemptible"></a>

```python
def reset_instance_types_preemptible() -> None
```

##### `reset_integration_docker_swarm` <a name="reset_integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIntegrationDockerSwarm"></a>

```python
def reset_integration_docker_swarm() -> None
```

##### `reset_integration_gke` <a name="reset_integration_gke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIntegrationGke"></a>

```python
def reset_integration_gke() -> None
```

##### `reset_ip_forwarding` <a name="reset_ip_forwarding" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIpForwarding"></a>

```python
def reset_ip_forwarding() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_node_image` <a name="reset_node_image" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetNodeImage"></a>

```python
def reset_node_image() -> None
```

##### `reset_ondemand_count` <a name="reset_ondemand_count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetOndemandCount"></a>

```python
def reset_ondemand_count() -> None
```

##### `reset_preemptible_percentage` <a name="reset_preemptible_percentage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetPreemptiblePercentage"></a>

```python
def reset_preemptible_percentage() -> None
```

##### `reset_provisioning_model` <a name="reset_provisioning_model" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetProvisioningModel"></a>

```python
def reset_provisioning_model() -> None
```

##### `reset_scaling_down_policy` <a name="reset_scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetScalingDownPolicy"></a>

```python
def reset_scaling_down_policy() -> None
```

##### `reset_scaling_up_policy` <a name="reset_scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetScalingUpPolicy"></a>

```python
def reset_scaling_up_policy() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_shutdown_script` <a name="reset_shutdown_script" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetShutdownScript"></a>

```python
def reset_shutdown_script() -> None
```

##### `reset_startup_script` <a name="reset_startup_script" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetStartupScript"></a>

```python
def reset_startup_script() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ElastigroupGke resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGke.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGke.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGke.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGke.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ElastigroupGke resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElastigroupGke to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElastigroupGke that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElastigroupGke to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.backendServices">backend_services</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList">ElastigroupGkeBackendServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList">ElastigroupGkeDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList">ElastigroupGkeGpuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesCustom">instance_types_custom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList">ElastigroupGkeInstanceTypesCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationDockerSwarm">integration_docker_swarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference">ElastigroupGkeIntegrationDockerSwarmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationGke">integration_gke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference">ElastigroupGkeIntegrationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList">ElastigroupGkeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList">ElastigroupGkeMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList">ElastigroupGkeNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingDownPolicy">scaling_down_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList">ElastigroupGkeScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingUpPolicy">scaling_up_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList">ElastigroupGkeScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.backendServicesInput">backend_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterZoneNameInput">cluster_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.diskInput">disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.drainingTimeoutInput">draining_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fallbackToOndemandInput">fallback_to_ondemand_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.gpuInput">gpu_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceNamePrefixInput">instance_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesCustomInput">instance_types_custom_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesOndemandInput">instance_types_ondemand_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesPreemptibleInput">instance_types_preemptible_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationDockerSwarmInput">integration_docker_swarm_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationGkeInput">integration_gke_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ipForwardingInput">ip_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.metadataInput">metadata_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nodeImageInput">node_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ondemandCountInput">ondemand_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.preemptiblePercentageInput">preemptible_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioningModelInput">provisioning_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingDownPolicyInput">scaling_down_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingUpPolicyInput">scaling_up_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.shutdownScriptInput">shutdown_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.startupScriptInput">startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterZoneName">cluster_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceNamePrefix">instance_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesOndemand">instance_types_ondemand</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesPreemptible">instance_types_preemptible</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ipForwarding">ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nodeImage">node_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ondemandCount">ondemand_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.preemptiblePercentage">preemptible_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.shutdownScript">shutdown_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.startupScript">startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_services`<sup>Required</sup> <a name="backend_services" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.backendServices"></a>

```python
backend_services: ElastigroupGkeBackendServicesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList">ElastigroupGkeBackendServicesList</a>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.disk"></a>

```python
disk: ElastigroupGkeDiskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList">ElastigroupGkeDiskList</a>

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.gpu"></a>

```python
gpu: ElastigroupGkeGpuList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList">ElastigroupGkeGpuList</a>

---

##### `instance_types_custom`<sup>Required</sup> <a name="instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesCustom"></a>

```python
instance_types_custom: ElastigroupGkeInstanceTypesCustomList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList">ElastigroupGkeInstanceTypesCustomList</a>

---

##### `integration_docker_swarm`<sup>Required</sup> <a name="integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationDockerSwarm"></a>

```python
integration_docker_swarm: ElastigroupGkeIntegrationDockerSwarmOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference">ElastigroupGkeIntegrationDockerSwarmOutputReference</a>

---

##### `integration_gke`<sup>Required</sup> <a name="integration_gke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationGke"></a>

```python
integration_gke: ElastigroupGkeIntegrationGkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference">ElastigroupGkeIntegrationGkeOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.labels"></a>

```python
labels: ElastigroupGkeLabelsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList">ElastigroupGkeLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.metadata"></a>

```python
metadata: ElastigroupGkeMetadataList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList">ElastigroupGkeMetadataList</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.networkInterface"></a>

```python
network_interface: ElastigroupGkeNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList">ElastigroupGkeNetworkInterfaceList</a>

---

##### `scaling_down_policy`<sup>Required</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingDownPolicy"></a>

```python
scaling_down_policy: ElastigroupGkeScalingDownPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList">ElastigroupGkeScalingDownPolicyList</a>

---

##### `scaling_up_policy`<sup>Required</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingUpPolicy"></a>

```python
scaling_up_policy: ElastigroupGkeScalingUpPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList">ElastigroupGkeScalingUpPolicyList</a>

---

##### `backend_services_input`<sup>Optional</sup> <a name="backend_services_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.backendServicesInput"></a>

```python
backend_services_input: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_zone_name_input`<sup>Optional</sup> <a name="cluster_zone_name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterZoneNameInput"></a>

```python
cluster_zone_name_input: str
```

- *Type:* str

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.desiredCapacityInput"></a>

```python
desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.diskInput"></a>

```python
disk_input: typing.Union[IResolvable, typing.List[ElastigroupGkeDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]]

---

##### `draining_timeout_input`<sup>Optional</sup> <a name="draining_timeout_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.drainingTimeoutInput"></a>

```python
draining_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_to_ondemand_input`<sup>Optional</sup> <a name="fallback_to_ondemand_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fallbackToOndemandInput"></a>

```python
fallback_to_ondemand_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gpu_input`<sup>Optional</sup> <a name="gpu_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.gpuInput"></a>

```python
gpu_input: typing.Union[IResolvable, typing.List[ElastigroupGkeGpu]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_name_prefix_input`<sup>Optional</sup> <a name="instance_name_prefix_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceNamePrefixInput"></a>

```python
instance_name_prefix_input: str
```

- *Type:* str

---

##### `instance_types_custom_input`<sup>Optional</sup> <a name="instance_types_custom_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesCustomInput"></a>

```python
instance_types_custom_input: typing.Union[IResolvable, typing.List[ElastigroupGkeInstanceTypesCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]]

---

##### `instance_types_ondemand_input`<sup>Optional</sup> <a name="instance_types_ondemand_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesOndemandInput"></a>

```python
instance_types_ondemand_input: str
```

- *Type:* str

---

##### `instance_types_preemptible_input`<sup>Optional</sup> <a name="instance_types_preemptible_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesPreemptibleInput"></a>

```python
instance_types_preemptible_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_docker_swarm_input`<sup>Optional</sup> <a name="integration_docker_swarm_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationDockerSwarmInput"></a>

```python
integration_docker_swarm_input: ElastigroupGkeIntegrationDockerSwarm
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a>

---

##### `integration_gke_input`<sup>Optional</sup> <a name="integration_gke_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationGkeInput"></a>

```python
integration_gke_input: ElastigroupGkeIntegrationGke
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a>

---

##### `ip_forwarding_input`<sup>Optional</sup> <a name="ip_forwarding_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ipForwardingInput"></a>

```python
ip_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[ElastigroupGkeLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]]

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.metadataInput"></a>

```python
metadata_input: typing.Union[IResolvable, typing.List[ElastigroupGkeMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]]

---

##### `node_image_input`<sup>Optional</sup> <a name="node_image_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nodeImageInput"></a>

```python
node_image_input: str
```

- *Type:* str

---

##### `ondemand_count_input`<sup>Optional</sup> <a name="ondemand_count_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ondemandCountInput"></a>

```python
ondemand_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preemptible_percentage_input`<sup>Optional</sup> <a name="preemptible_percentage_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.preemptiblePercentageInput"></a>

```python
preemptible_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_model_input`<sup>Optional</sup> <a name="provisioning_model_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioningModelInput"></a>

```python
provisioning_model_input: str
```

- *Type:* str

---

##### `scaling_down_policy_input`<sup>Optional</sup> <a name="scaling_down_policy_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingDownPolicyInput"></a>

```python
scaling_down_policy_input: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]]

---

##### `scaling_up_policy_input`<sup>Optional</sup> <a name="scaling_up_policy_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingUpPolicyInput"></a>

```python
scaling_up_policy_input: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `shutdown_script_input`<sup>Optional</sup> <a name="shutdown_script_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.shutdownScriptInput"></a>

```python
shutdown_script_input: str
```

- *Type:* str

---

##### `startup_script_input`<sup>Optional</sup> <a name="startup_script_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.startupScriptInput"></a>

```python
startup_script_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_zone_name`<sup>Required</sup> <a name="cluster_zone_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterZoneName"></a>

```python
cluster_zone_name: str
```

- *Type:* str

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout`<sup>Required</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_to_ondemand`<sup>Required</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fallbackToOndemand"></a>

```python
fallback_to_ondemand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name_prefix`<sup>Required</sup> <a name="instance_name_prefix" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceNamePrefix"></a>

```python
instance_name_prefix: str
```

- *Type:* str

---

##### `instance_types_ondemand`<sup>Required</sup> <a name="instance_types_ondemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesOndemand"></a>

```python
instance_types_ondemand: str
```

- *Type:* str

---

##### `instance_types_preemptible`<sup>Required</sup> <a name="instance_types_preemptible" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesPreemptible"></a>

```python
instance_types_preemptible: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_forwarding`<sup>Required</sup> <a name="ip_forwarding" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ipForwarding"></a>

```python
ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_image`<sup>Required</sup> <a name="node_image" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nodeImage"></a>

```python
node_image: str
```

- *Type:* str

---

##### `ondemand_count`<sup>Required</sup> <a name="ondemand_count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ondemandCount"></a>

```python
ondemand_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preemptible_percentage`<sup>Required</sup> <a name="preemptible_percentage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.preemptiblePercentage"></a>

```python
preemptible_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_model`<sup>Required</sup> <a name="provisioning_model" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `shutdown_script`<sup>Required</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.shutdownScript"></a>

```python
shutdown_script: str
```

- *Type:* str

---

##### `startup_script`<sup>Required</sup> <a name="startup_script" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.startupScript"></a>

```python
startup_script: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupGkeBackendServices <a name="ElastigroupGkeBackendServices" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeBackendServices(
  service_name: str,
  location_type: str = None,
  named_ports: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServicesNamedPorts]] = None,
  scheme: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#service_name ElastigroupGke#service_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.locationType">location_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#location_type ElastigroupGke#location_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.namedPorts">named_ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>]]</code> | named_ports block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#scheme ElastigroupGke#scheme}. |

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#service_name ElastigroupGke#service_name}.

---

##### `location_type`<sup>Optional</sup> <a name="location_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#location_type ElastigroupGke#location_type}.

---

##### `named_ports`<sup>Optional</sup> <a name="named_ports" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.namedPorts"></a>

```python
named_ports: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServicesNamedPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>]]

named_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#named_ports ElastigroupGke#named_ports}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#scheme ElastigroupGke#scheme}.

---

### ElastigroupGkeBackendServicesNamedPorts <a name="ElastigroupGkeBackendServicesNamedPorts" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeBackendServicesNamedPorts(
  name: str,
  ports: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.property.ports">ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ports ElastigroupGke#ports}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ports ElastigroupGke#ports}.

---

### ElastigroupGkeConfig <a name="ElastigroupGkeConfig" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_zone_name: str,
  desired_capacity: typing.Union[int, float],
  name: str,
  backend_services: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServices]] = None,
  cluster_id: str = None,
  disk: typing.Union[IResolvable, typing.List[ElastigroupGkeDisk]] = None,
  draining_timeout: typing.Union[int, float] = None,
  fallback_to_ondemand: typing.Union[bool, IResolvable] = None,
  gpu: typing.Union[IResolvable, typing.List[ElastigroupGkeGpu]] = None,
  id: str = None,
  instance_name_prefix: str = None,
  instance_types_custom: typing.Union[IResolvable, typing.List[ElastigroupGkeInstanceTypesCustom]] = None,
  instance_types_ondemand: str = None,
  instance_types_preemptible: typing.List[str] = None,
  integration_docker_swarm: ElastigroupGkeIntegrationDockerSwarm = None,
  integration_gke: ElastigroupGkeIntegrationGke = None,
  ip_forwarding: typing.Union[bool, IResolvable] = None,
  labels: typing.Union[IResolvable, typing.List[ElastigroupGkeLabels]] = None,
  max_size: typing.Union[int, float] = None,
  metadata: typing.Union[IResolvable, typing.List[ElastigroupGkeMetadata]] = None,
  min_size: typing.Union[int, float] = None,
  network_interface: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterface]] = None,
  node_image: str = None,
  ondemand_count: typing.Union[int, float] = None,
  preemptible_percentage: typing.Union[int, float] = None,
  provisioning_model: str = None,
  scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicy]] = None,
  scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicy]] = None,
  service_account: str = None,
  shutdown_script: str = None,
  startup_script: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.clusterZoneName">cluster_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_zone_name ElastigroupGke#cluster_zone_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#desired_capacity ElastigroupGke#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.backendServices">backend_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]]</code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#draining_timeout ElastigroupGke#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#fallback_to_ondemand ElastigroupGke#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.gpu">gpu</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]]</code> | gpu block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#id ElastigroupGke#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceNamePrefix">instance_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_name_prefix ElastigroupGke#instance_name_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesCustom">instance_types_custom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]]</code> | instance_types_custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesOndemand">instance_types_ondemand</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_ondemand ElastigroupGke#instance_types_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesPreemptible">instance_types_preemptible</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_preemptible ElastigroupGke#instance_types_preemptible}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.integrationDockerSwarm">integration_docker_swarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a></code> | integration_docker_swarm block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.integrationGke">integration_gke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a></code> | integration_gke block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.ipForwarding">ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ip_forwarding ElastigroupGke#ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#max_size ElastigroupGke#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.metadata">metadata</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]]</code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#min_size ElastigroupGke#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.nodeImage">node_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#node_image ElastigroupGke#node_image}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.ondemandCount">ondemand_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ondemand_count ElastigroupGke#ondemand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.preemptiblePercentage">preemptible_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#preemptible_percentage ElastigroupGke#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#provisioning_model ElastigroupGke#provisioning_model}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.scalingDownPolicy">scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.scalingUpPolicy">scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#service_account ElastigroupGke#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.shutdownScript">shutdown_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#shutdown_script ElastigroupGke#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.startupScript">startup_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#startup_script ElastigroupGke#startup_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#tags ElastigroupGke#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_zone_name`<sup>Required</sup> <a name="cluster_zone_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.clusterZoneName"></a>

```python
cluster_zone_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_zone_name ElastigroupGke#cluster_zone_name}.

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#desired_capacity ElastigroupGke#desired_capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `backend_services`<sup>Optional</sup> <a name="backend_services" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.backendServices"></a>

```python
backend_services: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]]

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#backend_services ElastigroupGke#backend_services}

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.disk"></a>

```python
disk: typing.Union[IResolvable, typing.List[ElastigroupGkeDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#disk ElastigroupGke#disk}

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#draining_timeout ElastigroupGke#draining_timeout}.

---

##### `fallback_to_ondemand`<sup>Optional</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.fallbackToOndemand"></a>

```python
fallback_to_ondemand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#fallback_to_ondemand ElastigroupGke#fallback_to_ondemand}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.gpu"></a>

```python
gpu: typing.Union[IResolvable, typing.List[ElastigroupGkeGpu]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]]

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#gpu ElastigroupGke#gpu}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#id ElastigroupGke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_name_prefix`<sup>Optional</sup> <a name="instance_name_prefix" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceNamePrefix"></a>

```python
instance_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_name_prefix ElastigroupGke#instance_name_prefix}.

---

##### `instance_types_custom`<sup>Optional</sup> <a name="instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesCustom"></a>

```python
instance_types_custom: typing.Union[IResolvable, typing.List[ElastigroupGkeInstanceTypesCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]]

instance_types_custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_custom ElastigroupGke#instance_types_custom}

---

##### `instance_types_ondemand`<sup>Optional</sup> <a name="instance_types_ondemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesOndemand"></a>

```python
instance_types_ondemand: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_ondemand ElastigroupGke#instance_types_ondemand}.

---

##### `instance_types_preemptible`<sup>Optional</sup> <a name="instance_types_preemptible" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesPreemptible"></a>

```python
instance_types_preemptible: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#instance_types_preemptible ElastigroupGke#instance_types_preemptible}.

---

##### `integration_docker_swarm`<sup>Optional</sup> <a name="integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.integrationDockerSwarm"></a>

```python
integration_docker_swarm: ElastigroupGkeIntegrationDockerSwarm
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a>

integration_docker_swarm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#integration_docker_swarm ElastigroupGke#integration_docker_swarm}

---

##### `integration_gke`<sup>Optional</sup> <a name="integration_gke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.integrationGke"></a>

```python
integration_gke: ElastigroupGkeIntegrationGke
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a>

integration_gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#integration_gke ElastigroupGke#integration_gke}

---

##### `ip_forwarding`<sup>Optional</sup> <a name="ip_forwarding" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.ipForwarding"></a>

```python
ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ip_forwarding ElastigroupGke#ip_forwarding}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[ElastigroupGkeLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#labels ElastigroupGke#labels}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#max_size ElastigroupGke#max_size}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.metadata"></a>

```python
metadata: typing.Union[IResolvable, typing.List[ElastigroupGkeMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#metadata ElastigroupGke#metadata}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#min_size ElastigroupGke#min_size}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#network_interface ElastigroupGke#network_interface}

---

##### `node_image`<sup>Optional</sup> <a name="node_image" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.nodeImage"></a>

```python
node_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#node_image ElastigroupGke#node_image}.

---

##### `ondemand_count`<sup>Optional</sup> <a name="ondemand_count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.ondemandCount"></a>

```python
ondemand_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ondemand_count ElastigroupGke#ondemand_count}.

---

##### `preemptible_percentage`<sup>Optional</sup> <a name="preemptible_percentage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.preemptiblePercentage"></a>

```python
preemptible_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#preemptible_percentage ElastigroupGke#preemptible_percentage}.

---

##### `provisioning_model`<sup>Optional</sup> <a name="provisioning_model" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#provisioning_model ElastigroupGke#provisioning_model}.

---

##### `scaling_down_policy`<sup>Optional</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.scalingDownPolicy"></a>

```python
scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#scaling_down_policy ElastigroupGke#scaling_down_policy}

---

##### `scaling_up_policy`<sup>Optional</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.scalingUpPolicy"></a>

```python
scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#scaling_up_policy ElastigroupGke#scaling_up_policy}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#service_account ElastigroupGke#service_account}.

---

##### `shutdown_script`<sup>Optional</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.shutdownScript"></a>

```python
shutdown_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#shutdown_script ElastigroupGke#shutdown_script}.

---

##### `startup_script`<sup>Optional</sup> <a name="startup_script" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.startupScript"></a>

```python
startup_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#startup_script ElastigroupGke#startup_script}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#tags ElastigroupGke#tags}.

---

### ElastigroupGkeDisk <a name="ElastigroupGkeDisk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeDisk(
  auto_delete: typing.Union[bool, IResolvable] = None,
  boot: typing.Union[bool, IResolvable] = None,
  device_name: str = None,
  initialize_params: typing.Union[IResolvable, typing.List[ElastigroupGkeDiskInitializeParams]] = None,
  interface: str = None,
  mode: str = None,
  source: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.autoDelete">auto_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#auto_delete ElastigroupGke#auto_delete}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.boot">boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#boot ElastigroupGke#boot}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#device_name ElastigroupGke#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.initializeParams">initialize_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>]]</code> | initialize_params block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.interface">interface</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#interface ElastigroupGke#interface}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#mode ElastigroupGke#mode}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#source ElastigroupGke#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#type ElastigroupGke#type}. |

---

##### `auto_delete`<sup>Optional</sup> <a name="auto_delete" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.autoDelete"></a>

```python
auto_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#auto_delete ElastigroupGke#auto_delete}.

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.boot"></a>

```python
boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#boot ElastigroupGke#boot}.

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#device_name ElastigroupGke#device_name}.

---

##### `initialize_params`<sup>Optional</sup> <a name="initialize_params" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.initializeParams"></a>

```python
initialize_params: typing.Union[IResolvable, typing.List[ElastigroupGkeDiskInitializeParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>]]

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#initialize_params ElastigroupGke#initialize_params}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.interface"></a>

```python
interface: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#interface ElastigroupGke#interface}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#mode ElastigroupGke#mode}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#source ElastigroupGke#source}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#type ElastigroupGke#type}.

---

### ElastigroupGkeDiskInitializeParams <a name="ElastigroupGkeDiskInitializeParams" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeDiskInitializeParams(
  source_image: str,
  disk_size_gb: str = None,
  disk_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.sourceImage">source_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#source_image ElastigroupGke#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#disk_size_gb ElastigroupGke#disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.diskType">disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#disk_type ElastigroupGke#disk_type}. |

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#source_image ElastigroupGke#source_image}.

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#disk_size_gb ElastigroupGke#disk_size_gb}.

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#disk_type ElastigroupGke#disk_type}.

---

### ElastigroupGkeGpu <a name="ElastigroupGkeGpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeGpu(
  count: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#count ElastigroupGke#count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#type ElastigroupGke#type}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#count ElastigroupGke#count}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#type ElastigroupGke#type}.

---

### ElastigroupGkeInstanceTypesCustom <a name="ElastigroupGkeInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeInstanceTypesCustom(
  memory_gib: typing.Union[int, float],
  vcpu: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.property.memoryGib">memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#memory_gib ElastigroupGke#memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.property.vcpu">vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#vcpu ElastigroupGke#vcpu}. |

---

##### `memory_gib`<sup>Required</sup> <a name="memory_gib" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.property.memoryGib"></a>

```python
memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#memory_gib ElastigroupGke#memory_gib}.

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.property.vcpu"></a>

```python
vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#vcpu ElastigroupGke#vcpu}.

---

### ElastigroupGkeIntegrationDockerSwarm <a name="ElastigroupGkeIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationDockerSwarm(
  master_host: str,
  master_port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.property.masterHost">master_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#master_host ElastigroupGke#master_host}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.property.masterPort">master_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#master_port ElastigroupGke#master_port}. |

---

##### `master_host`<sup>Required</sup> <a name="master_host" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.property.masterHost"></a>

```python
master_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#master_host ElastigroupGke#master_host}.

---

##### `master_port`<sup>Required</sup> <a name="master_port" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.property.masterPort"></a>

```python
master_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#master_port ElastigroupGke#master_port}.

---

### ElastigroupGkeIntegrationGke <a name="ElastigroupGkeIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationGke(
  autoscale_cooldown: typing.Union[int, float] = None,
  autoscale_down: ElastigroupGkeIntegrationGkeAutoscaleDown = None,
  autoscale_headroom: ElastigroupGkeIntegrationGkeAutoscaleHeadroom = None,
  autoscale_is_auto_config: typing.Union[bool, IResolvable] = None,
  autoscale_is_enabled: typing.Union[bool, IResolvable] = None,
  autoscale_labels: typing.Union[IResolvable, typing.List[ElastigroupGkeIntegrationGkeAutoscaleLabels]] = None,
  auto_update: typing.Union[bool, IResolvable] = None,
  cluster_id: str = None,
  location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleCooldown">autoscale_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_cooldown ElastigroupGke#autoscale_cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleDown">autoscale_down</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleHeadroom">autoscale_headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleIsAutoConfig">autoscale_is_auto_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_is_auto_config ElastigroupGke#autoscale_is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleIsEnabled">autoscale_is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_is_enabled ElastigroupGke#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleLabels">autoscale_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]]</code> | autoscale_labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoUpdate">auto_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#auto_update ElastigroupGke#auto_update}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#location ElastigroupGke#location}. |

---

##### `autoscale_cooldown`<sup>Optional</sup> <a name="autoscale_cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleCooldown"></a>

```python
autoscale_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_cooldown ElastigroupGke#autoscale_cooldown}.

---

##### `autoscale_down`<sup>Optional</sup> <a name="autoscale_down" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleDown"></a>

```python
autoscale_down: ElastigroupGkeIntegrationGkeAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_down ElastigroupGke#autoscale_down}

---

##### `autoscale_headroom`<sup>Optional</sup> <a name="autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleHeadroom"></a>

```python
autoscale_headroom: ElastigroupGkeIntegrationGkeAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_headroom ElastigroupGke#autoscale_headroom}

---

##### `autoscale_is_auto_config`<sup>Optional</sup> <a name="autoscale_is_auto_config" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleIsAutoConfig"></a>

```python
autoscale_is_auto_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_is_auto_config ElastigroupGke#autoscale_is_auto_config}.

---

##### `autoscale_is_enabled`<sup>Optional</sup> <a name="autoscale_is_enabled" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleIsEnabled"></a>

```python
autoscale_is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_is_enabled ElastigroupGke#autoscale_is_enabled}.

---

##### `autoscale_labels`<sup>Optional</sup> <a name="autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleLabels"></a>

```python
autoscale_labels: typing.Union[IResolvable, typing.List[ElastigroupGkeIntegrationGkeAutoscaleLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]]

autoscale_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#autoscale_labels ElastigroupGke#autoscale_labels}

---

##### `auto_update`<sup>Optional</sup> <a name="auto_update" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoUpdate"></a>

```python
auto_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#auto_update ElastigroupGke#auto_update}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#location ElastigroupGke#location}.

---

### ElastigroupGkeIntegrationGkeAutoscaleDown <a name="ElastigroupGkeIntegrationGkeAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown(
  evaluation_periods: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}. |

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}.

---

### ElastigroupGkeIntegrationGkeAutoscaleHeadroom <a name="ElastigroupGkeIntegrationGkeAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom(
  cpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None,
  num_of_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cpu_per_unit ElastigroupGke#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#memory_per_unit ElastigroupGke#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#num_of_units ElastigroupGke#num_of_units}. |

---

##### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cpu_per_unit ElastigroupGke#cpu_per_unit}.

---

##### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#memory_per_unit ElastigroupGke#memory_per_unit}.

---

##### `num_of_units`<sup>Optional</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#num_of_units ElastigroupGke#num_of_units}.

---

### ElastigroupGkeIntegrationGkeAutoscaleLabels <a name="ElastigroupGkeIntegrationGkeAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#key ElastigroupGke#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#key ElastigroupGke#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

### ElastigroupGkeLabels <a name="ElastigroupGkeLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeLabels(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#key ElastigroupGke#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#key ElastigroupGke#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

### ElastigroupGkeMetadata <a name="ElastigroupGkeMetadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeMetadata(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#key ElastigroupGke#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#key ElastigroupGke#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

### ElastigroupGkeNetworkInterface <a name="ElastigroupGkeNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeNetworkInterface(
  network: str,
  access_configs: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAccessConfigs]] = None,
  alias_ip_ranges: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAliasIpRanges]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.network">network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#network ElastigroupGke#network}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.accessConfigs">access_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>]]</code> | access_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.aliasIpRanges">alias_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>]]</code> | alias_ip_ranges block. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.network"></a>

```python
network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#network ElastigroupGke#network}.

---

##### `access_configs`<sup>Optional</sup> <a name="access_configs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.accessConfigs"></a>

```python
access_configs: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>]]

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#access_configs ElastigroupGke#access_configs}

---

##### `alias_ip_ranges`<sup>Optional</sup> <a name="alias_ip_ranges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.aliasIpRanges"></a>

```python
alias_ip_ranges: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAliasIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>]]

alias_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#alias_ip_ranges ElastigroupGke#alias_ip_ranges}

---

### ElastigroupGkeNetworkInterfaceAccessConfigs <a name="ElastigroupGkeNetworkInterfaceAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#type ElastigroupGke#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#type ElastigroupGke#type}.

---

### ElastigroupGkeNetworkInterfaceAliasIpRanges <a name="ElastigroupGkeNetworkInterfaceAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges(
  ip_cidr_range: str,
  subnetwork_range_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ip_cidr_range ElastigroupGke#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#subnetwork_range_name ElastigroupGke#subnetwork_range_name}. |

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#ip_cidr_range ElastigroupGke#ip_cidr_range}.

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#subnetwork_range_name ElastigroupGke#subnetwork_range_name}.

---

### ElastigroupGkeScalingDownPolicy <a name="ElastigroupGkeScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingDownPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  unit: str,
  action_type: str = None,
  adjustment: typing.Union[int, float] = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicyDimensions]] = None,
  evaluation_periods: typing.Union[int, float] = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  source: str = None,
  statistic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#period ElastigroupGke#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#source ElastigroupGke#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.adjustment"></a>

```python
adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#dimensions ElastigroupGke#dimensions}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#period ElastigroupGke#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#source ElastigroupGke#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}.

---

### ElastigroupGkeScalingDownPolicyDimensions <a name="ElastigroupGkeScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions(
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

### ElastigroupGkeScalingUpPolicy <a name="ElastigroupGkeScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingUpPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  unit: str,
  action_type: str = None,
  adjustment: typing.Union[int, float] = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicyDimensions]] = None,
  evaluation_periods: typing.Union[int, float] = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  source: str = None,
  statistic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#period ElastigroupGke#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#source ElastigroupGke#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.adjustment"></a>

```python
adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#dimensions ElastigroupGke#dimensions}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#period ElastigroupGke#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#source ElastigroupGke#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}.

---

### ElastigroupGkeScalingUpPolicyDimensions <a name="ElastigroupGkeScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions(
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupGkeBackendServicesList <a name="ElastigroupGkeBackendServicesList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeBackendServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeBackendServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]]

---


### ElastigroupGkeBackendServicesNamedPortsList <a name="ElastigroupGkeBackendServicesNamedPortsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeBackendServicesNamedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServicesNamedPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>]]

---


### ElastigroupGkeBackendServicesNamedPortsOutputReference <a name="ElastigroupGkeBackendServicesNamedPortsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeBackendServicesNamedPorts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>]

---


### ElastigroupGkeBackendServicesOutputReference <a name="ElastigroupGkeBackendServicesOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeBackendServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.putNamedPorts">put_named_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetLocationType">reset_location_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetNamedPorts">reset_named_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_named_ports` <a name="put_named_ports" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.putNamedPorts"></a>

```python
def put_named_ports(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServicesNamedPorts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.putNamedPorts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>]]

---

##### `reset_location_type` <a name="reset_location_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetLocationType"></a>

```python
def reset_location_type() -> None
```

##### `reset_named_ports` <a name="reset_named_ports" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetNamedPorts"></a>

```python
def reset_named_ports() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.namedPorts">named_ports</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList">ElastigroupGkeBackendServicesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.locationTypeInput">location_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.namedPortsInput">named_ports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.locationType">location_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `named_ports`<sup>Required</sup> <a name="named_ports" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.namedPorts"></a>

```python
named_ports: ElastigroupGkeBackendServicesNamedPortsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList">ElastigroupGkeBackendServicesNamedPortsList</a>

---

##### `location_type_input`<sup>Optional</sup> <a name="location_type_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.locationTypeInput"></a>

```python
location_type_input: str
```

- *Type:* str

---

##### `named_ports_input`<sup>Optional</sup> <a name="named_ports_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.namedPortsInput"></a>

```python
named_ports_input: typing.Union[IResolvable, typing.List[ElastigroupGkeBackendServicesNamedPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>]]

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeBackendServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>]

---


### ElastigroupGkeDiskInitializeParamsList <a name="ElastigroupGkeDiskInitializeParamsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeDiskInitializeParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeDiskInitializeParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeDiskInitializeParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>]]

---


### ElastigroupGkeDiskInitializeParamsOutputReference <a name="ElastigroupGkeDiskInitializeParamsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.sourceImageInput">source_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `source_image_input`<sup>Optional</sup> <a name="source_image_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.sourceImageInput"></a>

```python
source_image_input: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeDiskInitializeParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>]

---


### ElastigroupGkeDiskList <a name="ElastigroupGkeDiskList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]]

---


### ElastigroupGkeDiskOutputReference <a name="ElastigroupGkeDiskOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.putInitializeParams">put_initialize_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetAutoDelete">reset_auto_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetBoot">reset_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetInitializeParams">reset_initialize_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetInterface">reset_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_initialize_params` <a name="put_initialize_params" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.putInitializeParams"></a>

```python
def put_initialize_params(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeDiskInitializeParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>]]

---

##### `reset_auto_delete` <a name="reset_auto_delete" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetAutoDelete"></a>

```python
def reset_auto_delete() -> None
```

##### `reset_boot` <a name="reset_boot" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetBoot"></a>

```python
def reset_boot() -> None
```

##### `reset_device_name` <a name="reset_device_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_initialize_params` <a name="reset_initialize_params" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetInitializeParams"></a>

```python
def reset_initialize_params() -> None
```

##### `reset_interface` <a name="reset_interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetInterface"></a>

```python
def reset_interface() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.initializeParams">initialize_params</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList">ElastigroupGkeDiskInitializeParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.autoDeleteInput">auto_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.bootInput">boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.initializeParamsInput">initialize_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.autoDelete">auto_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.boot">boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initialize_params`<sup>Required</sup> <a name="initialize_params" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.initializeParams"></a>

```python
initialize_params: ElastigroupGkeDiskInitializeParamsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList">ElastigroupGkeDiskInitializeParamsList</a>

---

##### `auto_delete_input`<sup>Optional</sup> <a name="auto_delete_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.autoDeleteInput"></a>

```python
auto_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `boot_input`<sup>Optional</sup> <a name="boot_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.bootInput"></a>

```python
boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `initialize_params_input`<sup>Optional</sup> <a name="initialize_params_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.initializeParamsInput"></a>

```python
initialize_params_input: typing.Union[IResolvable, typing.List[ElastigroupGkeDiskInitializeParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>]]

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.autoDelete"></a>

```python
auto_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.boot"></a>

```python
boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>]

---


### ElastigroupGkeGpuList <a name="ElastigroupGkeGpuList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeGpuList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeGpuOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeGpu]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]]

---


### ElastigroupGkeGpuOutputReference <a name="ElastigroupGkeGpuOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeGpuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeGpu]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>]

---


### ElastigroupGkeInstanceTypesCustomList <a name="ElastigroupGkeInstanceTypesCustomList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeInstanceTypesCustomList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeInstanceTypesCustomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeInstanceTypesCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]]

---


### ElastigroupGkeInstanceTypesCustomOutputReference <a name="ElastigroupGkeInstanceTypesCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.memoryGibInput">memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.vcpuInput">vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.memoryGib">memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.vcpu">vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_gib_input`<sup>Optional</sup> <a name="memory_gib_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.memoryGibInput"></a>

```python
memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpu_input`<sup>Optional</sup> <a name="vcpu_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.vcpuInput"></a>

```python
vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gib`<sup>Required</sup> <a name="memory_gib" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.memoryGib"></a>

```python
memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.vcpu"></a>

```python
vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeInstanceTypesCustom]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>]

---


### ElastigroupGkeIntegrationDockerSwarmOutputReference <a name="ElastigroupGkeIntegrationDockerSwarmOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterHostInput">master_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterPortInput">master_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterHost">master_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterPort">master_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `master_host_input`<sup>Optional</sup> <a name="master_host_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterHostInput"></a>

```python
master_host_input: str
```

- *Type:* str

---

##### `master_port_input`<sup>Optional</sup> <a name="master_port_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterPortInput"></a>

```python
master_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_host`<sup>Required</sup> <a name="master_host" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterHost"></a>

```python
master_host: str
```

- *Type:* str

---

##### `master_port`<sup>Required</sup> <a name="master_port" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterPort"></a>

```python
master_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupGkeIntegrationDockerSwarm
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a>

---


### ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference <a name="ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupGkeIntegrationGkeAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a>

---


### ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference <a name="ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit">reset_cpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit">reset_memory_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits">reset_num_of_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_per_unit` <a name="reset_cpu_per_unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```python
def reset_cpu_per_unit() -> None
```

##### `reset_memory_per_unit` <a name="reset_memory_per_unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```python
def reset_memory_per_unit() -> None
```

##### `reset_num_of_units` <a name="reset_num_of_units" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits"></a>

```python
def reset_num_of_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">cpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">memory_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput">num_of_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_per_unit_input`<sup>Optional</sup> <a name="cpu_per_unit_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```python
cpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit_input`<sup>Optional</sup> <a name="memory_per_unit_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```python
memory_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units_input`<sup>Optional</sup> <a name="num_of_units_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```python
num_of_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_per_unit`<sup>Required</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit`<sup>Required</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units`<sup>Required</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupGkeIntegrationGkeAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a>

---


### ElastigroupGkeIntegrationGkeAutoscaleLabelsList <a name="ElastigroupGkeIntegrationGkeAutoscaleLabelsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeIntegrationGkeAutoscaleLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]]

---


### ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference <a name="ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeIntegrationGkeAutoscaleLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]

---


### ElastigroupGkeIntegrationGkeOutputReference <a name="ElastigroupGkeIntegrationGkeOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleDown">put_autoscale_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleHeadroom">put_autoscale_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleLabels">put_autoscale_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleCooldown">reset_autoscale_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleDown">reset_autoscale_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleHeadroom">reset_autoscale_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig">reset_autoscale_is_auto_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleIsEnabled">reset_autoscale_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleLabels">reset_autoscale_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoUpdate">reset_auto_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetLocation">reset_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscale_down` <a name="put_autoscale_down" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleDown"></a>

```python
def put_autoscale_down(
  evaluation_periods: typing.Union[int, float] = None
) -> None
```

###### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleDown.parameter.evaluationPeriods"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}.

---

##### `put_autoscale_headroom` <a name="put_autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleHeadroom"></a>

```python
def put_autoscale_headroom(
  cpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None,
  num_of_units: typing.Union[int, float] = None
) -> None
```

###### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleHeadroom.parameter.cpuPerUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#cpu_per_unit ElastigroupGke#cpu_per_unit}.

---

###### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleHeadroom.parameter.memoryPerUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#memory_per_unit ElastigroupGke#memory_per_unit}.

---

###### `num_of_units`<sup>Optional</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleHeadroom.parameter.numOfUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.1/docs/resources/elastigroup_gke#num_of_units ElastigroupGke#num_of_units}.

---

##### `put_autoscale_labels` <a name="put_autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleLabels"></a>

```python
def put_autoscale_labels(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeIntegrationGkeAutoscaleLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]]

---

##### `reset_autoscale_cooldown` <a name="reset_autoscale_cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleCooldown"></a>

```python
def reset_autoscale_cooldown() -> None
```

##### `reset_autoscale_down` <a name="reset_autoscale_down" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleDown"></a>

```python
def reset_autoscale_down() -> None
```

##### `reset_autoscale_headroom` <a name="reset_autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleHeadroom"></a>

```python
def reset_autoscale_headroom() -> None
```

##### `reset_autoscale_is_auto_config` <a name="reset_autoscale_is_auto_config" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig"></a>

```python
def reset_autoscale_is_auto_config() -> None
```

##### `reset_autoscale_is_enabled` <a name="reset_autoscale_is_enabled" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleIsEnabled"></a>

```python
def reset_autoscale_is_enabled() -> None
```

##### `reset_autoscale_labels` <a name="reset_autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleLabels"></a>

```python
def reset_autoscale_labels() -> None
```

##### `reset_auto_update` <a name="reset_auto_update" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoUpdate"></a>

```python
def reset_auto_update() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleDown">autoscale_down</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference">ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleHeadroom">autoscale_headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleLabels">autoscale_labels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList">ElastigroupGkeIntegrationGkeAutoscaleLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleCooldownInput">autoscale_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleDownInput">autoscale_down_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleHeadroomInput">autoscale_headroom_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput">autoscale_is_auto_config_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsEnabledInput">autoscale_is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleLabelsInput">autoscale_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoUpdateInput">auto_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleCooldown">autoscale_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsAutoConfig">autoscale_is_auto_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsEnabled">autoscale_is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoUpdate">auto_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscale_down`<sup>Required</sup> <a name="autoscale_down" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleDown"></a>

```python
autoscale_down: ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference">ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference</a>

---

##### `autoscale_headroom`<sup>Required</sup> <a name="autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleHeadroom"></a>

```python
autoscale_headroom: ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference</a>

---

##### `autoscale_labels`<sup>Required</sup> <a name="autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleLabels"></a>

```python
autoscale_labels: ElastigroupGkeIntegrationGkeAutoscaleLabelsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList">ElastigroupGkeIntegrationGkeAutoscaleLabelsList</a>

---

##### `autoscale_cooldown_input`<sup>Optional</sup> <a name="autoscale_cooldown_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleCooldownInput"></a>

```python
autoscale_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscale_down_input`<sup>Optional</sup> <a name="autoscale_down_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleDownInput"></a>

```python
autoscale_down_input: ElastigroupGkeIntegrationGkeAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a>

---

##### `autoscale_headroom_input`<sup>Optional</sup> <a name="autoscale_headroom_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleHeadroomInput"></a>

```python
autoscale_headroom_input: ElastigroupGkeIntegrationGkeAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a>

---

##### `autoscale_is_auto_config_input`<sup>Optional</sup> <a name="autoscale_is_auto_config_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput"></a>

```python
autoscale_is_auto_config_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_is_enabled_input`<sup>Optional</sup> <a name="autoscale_is_enabled_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsEnabledInput"></a>

```python
autoscale_is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_labels_input`<sup>Optional</sup> <a name="autoscale_labels_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleLabelsInput"></a>

```python
autoscale_labels_input: typing.Union[IResolvable, typing.List[ElastigroupGkeIntegrationGkeAutoscaleLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>]]

---

##### `auto_update_input`<sup>Optional</sup> <a name="auto_update_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoUpdateInput"></a>

```python
auto_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `autoscale_cooldown`<sup>Required</sup> <a name="autoscale_cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleCooldown"></a>

```python
autoscale_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscale_is_auto_config`<sup>Required</sup> <a name="autoscale_is_auto_config" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsAutoConfig"></a>

```python
autoscale_is_auto_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_is_enabled`<sup>Required</sup> <a name="autoscale_is_enabled" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsEnabled"></a>

```python
autoscale_is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_update`<sup>Required</sup> <a name="auto_update" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoUpdate"></a>

```python
auto_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupGkeIntegrationGke
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a>

---


### ElastigroupGkeLabelsList <a name="ElastigroupGkeLabelsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]]

---


### ElastigroupGkeLabelsOutputReference <a name="ElastigroupGkeLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>]

---


### ElastigroupGkeMetadataList <a name="ElastigroupGkeMetadataList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]]

---


### ElastigroupGkeMetadataOutputReference <a name="ElastigroupGkeMetadataOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeMetadata]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>]

---


### ElastigroupGkeNetworkInterfaceAccessConfigsList <a name="ElastigroupGkeNetworkInterfaceAccessConfigsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>]]

---


### ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference <a name="ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeNetworkInterfaceAccessConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>]

---


### ElastigroupGkeNetworkInterfaceAliasIpRangesList <a name="ElastigroupGkeNetworkInterfaceAliasIpRangesList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAliasIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>]]

---


### ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference <a name="ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput">subnetwork_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `subnetwork_range_name_input`<sup>Optional</sup> <a name="subnetwork_range_name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput"></a>

```python
subnetwork_range_name_input: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeNetworkInterfaceAliasIpRanges]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>]

---


### ElastigroupGkeNetworkInterfaceList <a name="ElastigroupGkeNetworkInterfaceList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]]

---


### ElastigroupGkeNetworkInterfaceOutputReference <a name="ElastigroupGkeNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAccessConfigs">put_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAliasIpRanges">put_alias_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resetAccessConfigs">reset_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resetAliasIpRanges">reset_alias_ip_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_configs` <a name="put_access_configs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAccessConfigs"></a>

```python
def put_access_configs(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAccessConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>]]

---

##### `put_alias_ip_ranges` <a name="put_alias_ip_ranges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAliasIpRanges"></a>

```python
def put_alias_ip_ranges(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAliasIpRanges]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAliasIpRanges.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>]]

---

##### `reset_access_configs` <a name="reset_access_configs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resetAccessConfigs"></a>

```python
def reset_access_configs() -> None
```

##### `reset_alias_ip_ranges` <a name="reset_alias_ip_ranges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resetAliasIpRanges"></a>

```python
def reset_alias_ip_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.accessConfigs">access_configs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList">ElastigroupGkeNetworkInterfaceAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.aliasIpRanges">alias_ip_ranges</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList">ElastigroupGkeNetworkInterfaceAliasIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.accessConfigsInput">access_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.aliasIpRangesInput">alias_ip_ranges_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_configs`<sup>Required</sup> <a name="access_configs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.accessConfigs"></a>

```python
access_configs: ElastigroupGkeNetworkInterfaceAccessConfigsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList">ElastigroupGkeNetworkInterfaceAccessConfigsList</a>

---

##### `alias_ip_ranges`<sup>Required</sup> <a name="alias_ip_ranges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.aliasIpRanges"></a>

```python
alias_ip_ranges: ElastigroupGkeNetworkInterfaceAliasIpRangesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList">ElastigroupGkeNetworkInterfaceAliasIpRangesList</a>

---

##### `access_configs_input`<sup>Optional</sup> <a name="access_configs_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.accessConfigsInput"></a>

```python
access_configs_input: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>]]

---

##### `alias_ip_ranges_input`<sup>Optional</sup> <a name="alias_ip_ranges_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.aliasIpRangesInput"></a>

```python
alias_ip_ranges_input: typing.Union[IResolvable, typing.List[ElastigroupGkeNetworkInterfaceAliasIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>]]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>]

---


### ElastigroupGkeScalingDownPolicyDimensionsList <a name="ElastigroupGkeScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeScalingDownPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>]]

---


### ElastigroupGkeScalingDownPolicyDimensionsOutputReference <a name="ElastigroupGkeScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeScalingDownPolicyDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>]

---


### ElastigroupGkeScalingDownPolicyList <a name="ElastigroupGkeScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingDownPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]]

---


### ElastigroupGkeScalingDownPolicyOutputReference <a name="ElastigroupGkeScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicyDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>]]

---

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList">ElastigroupGkeScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.dimensions"></a>

```python
dimensions: ElastigroupGkeScalingDownPolicyDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList">ElastigroupGkeScalingDownPolicyDimensionsList</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>]]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.adjustment"></a>

```python
adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeScalingDownPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>]

---


### ElastigroupGkeScalingUpPolicyDimensionsList <a name="ElastigroupGkeScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeScalingUpPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>]]

---


### ElastigroupGkeScalingUpPolicyDimensionsOutputReference <a name="ElastigroupGkeScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeScalingUpPolicyDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>]

---


### ElastigroupGkeScalingUpPolicyList <a name="ElastigroupGkeScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingUpPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGkeScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]]

---


### ElastigroupGkeScalingUpPolicyOutputReference <a name="ElastigroupGkeScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gke

elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicyDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>]]

---

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList">ElastigroupGkeScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.dimensions"></a>

```python
dimensions: ElastigroupGkeScalingUpPolicyDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList">ElastigroupGkeScalingUpPolicyDimensionsList</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[ElastigroupGkeScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>]]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.adjustment"></a>

```python
adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGkeScalingUpPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>]

---



